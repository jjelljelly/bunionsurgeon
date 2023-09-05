import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Layout } from "../../components/templates/Layout";
import { fetchEntries } from "../../lib/contentful";
import { getPlaiceholder } from "plaiceholder";
import style from './slug.module.css'
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { getSlug } from "../../lib/utils";

export default function Slug({ blogs, logoImage, blImage }) {
  return (
    <Layout logo={logoImage}>
      <Head>
        <title>{blogs?.fields?.blogTitle}</title>
        <meta
          name="description"
          content={blogs?.fields?.metaData}
        />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0"
        />
        <script type="application/ld+json" class="aioseo-schema">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.bunionsurgeon.co.uk/about/#breadcrumblist",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/#listItem",
                    position: 1,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/",
                      name: "Home",
                      description:
                        "London\u2019s Premier Minimally Invasive Bunion Clinic",
                      url: "https://www.bunionsurgeon.co.uk/",
                    },
                    nextItem: "https://www.bunionsurgeon.co.uk/about/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/about/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": `https://www.bunionsurgeon.co.uk/blog/${getSlug(blogs?.fields?.blogTitle)}`,
                      name: `${blogs?.fields?.blogTitle}`,
                      description:
                        `${blogs?.fields?.metaData}`,
                      url: `https://www.bunionsurgeon.co.uk/blog/${getSlug(blogs?.fields?.blogTitle)}`,
                    },
                    previousItem: "https://www.bunionsurgeon.co.uk/#listItem",
                  },
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://www.bunionsurgeon.co.uk/#organization",
                name: "Bunion Surgeon",
                url: "https://www.bunionsurgeon.co.uk/",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44 207 820 8007",
                  contactType: "none",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.bunionsurgeon.co.uk/#website",
                url: "https://www.bunionsurgeon.co.uk/",
                name: "bunionsurgeon",
                description:
                  "London\u2019s Premier Minimally Invasive Bunion Clinic",
                inLanguage: "en-GB",
                publisher: {
                  "@id": "https://www.bunionsurgeon.co.uk/#organization",
                },
              },
              {

                "@type": "WebPage",
                "@id": `https://www.bunionsurgeon.co.uk/blog/${getSlug(blogs?.fields?.blogTitle)}#webpage`,
                url: `https://www.bunionsurgeon.co.uk/blog/${getSlug(blogs?.fields?.blogTitle)}`,
                name: `${blogs?.fields?.blogTitle}`,
                description: "Mr Kaser Nazir, Consultant Podiatric Surgeon, Mr. Nazir has performed over 1900 Bunion surgeries since 2010 with a 97% success rate...",
                inLanguage: "en-GB",
                isPartOf: { "@id": "https://www.bunionsurgeon.co.uk/#website" },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/about/#breadcrumblist",
                },
                datePublished: "2018-11-23T18:13:22+00:00",
                dateModified: "2023-06-05T16:22:32+01:00",
              },
            ],
          })}
        </script>
      </Head>

      <div className={style.headerSec}>
        <BackgroundLines image={blImage} />
        <h1>{blogs?.fields?.blogTitle}</h1>
        <p>Date published: {blogs?.fields?.dateBlogPublished}</p>
      </div>
      <div className={style.blogCont}>
        {blogs?.fields?.blogTextSection?.content.map((section, i) => {

          if (section.nodeType === "embedded-asset-block") {
            return (
              <div
                key={"section" + i}
                className={style.section}
              >
                <img
                  key={"section" + i}
                  src={section.data.target.fields.file.url}
                  className={style.image}
                  style={{ margin: "auto" }}
                />
              </div>
            );
          } else {
            return (
              <div key={"section" + i} className={style.section}>
                {documentToReactComponents(section)}
              </div>
            );
          }
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await fetchEntries({
    content_type: "bunionSurgeonBlogs"
  });

  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const blogs = result.find(item => getSlug(item.fields.blogTitle) === slug)

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!blogs) {
    return {
      props: {
        logoImage: {
          ...logoImg,
          blurDataURL: logoBase64,
        },
        blImage: {
          ...blImg,
          blurDataURL: blBase64,
        },
      }
    };
  }

  // Return the post as props
  return {
    props: {
      blogs,
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64,
      },
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
    },
  };
}

export async function getStaticPaths() {
  // Query Contentful for all blog posts in the space
  const blogs = await fetchEntries({
    content_type: "bunionSurgeonBlogs",
  });

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = blogs.map(({ fields: { blogTitle } }) => {
    const slug = getSlug(blogTitle)
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
