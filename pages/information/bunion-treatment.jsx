import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { Layout } from "../../components/templates/Layout";
import { getPlaiceholder } from "plaiceholder";
import style from "./information.module.css";
import { FrequentQuestions } from "../../components/surgery/FrequentQuestions";
import { fetchEntries } from "../../lib/contentful";


export async function getStaticProps() {
    const { base64: blBase64, img: blImg } = await getPlaiceholder(
        "/images/abstract-lines.png"
    );
    const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
        "/images/bunion-logo.png"
    );
    const fetchedProducts = await fetchEntries({
        content_type: "bunionInfofaq",
    });

    return {
        props: {
            blImage: {
                ...blImg,
                blurDataURL: blBase64,
            },
            logoImage: {
                ...logoImg,
                blurDataURL: logoBase64,
            },
            faqBunion: fetchedProducts,
        },
    };
}

export default function BunionTreatment({
    blImage,
    logoImage,
    faqBunion,
}) {
    return (
        <>
            <Head>
                <title>Bunion Treatment London: Trusted Specialists &amp; Effective Solutions | Bunionsurgeon.co.uk</title>
                <meta
                    name="description"
                    content="Find effective bunion treatment in London to say goodbye to bunion pain. Advanced &amp;
                    personalized bunion treatment plans tailored to you. Book your consultation today!."
                />
                <link rel="icon" href="/images/bunion-logo.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0,user-scalable=0"
                    viewport-fit="cover"
                />
                <script type="application/ld+json" class="aioseo-schema">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "BreadcrumbList",
                                "@id":
                                    "https://www.bunionsurgeon.co.uk/information/bunion-treatment/#breadcrumblist",
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
                                                "Find effective bunion treatment in London to say goodbye to bunion pain. Advanced and personalized bunion treatment plans tailored to you. Book your consultation today!",
                                            url: "https://www.bunionsurgeon.co.uk/",
                                        },
                                        nextItem:
                                            "https://www.bunionsurgeon.co.uk/information/bunion-treatment/#listItem",
                                    },
                                    {
                                        "@type": "ListItem",
                                        "@id":
                                            "https://www.bunionsurgeon.co.uk/information/bunion-treatment/#listItem",
                                        position: 2,
                                        item: {
                                            "@type": "WebPage",
                                            "@id":
                                                "https://www.bunionsurgeon.co.uk/information/bunion-treatment/",
                                            name: "Lapidus Fusion Procedure",
                                            description:
                                                "Find effective bunion treatment in London to say goodbye to bunion pain. Advanced and personalized bunion treatment plans tailored to you. Book your consultation today!",
                                            url: "https://www.bunionsurgeon.co.uk/surgeries/lapidus/",
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
                                    "Find effective bunion treatment in London to say goodbye to bunion pain. Advanced and personalized bunion treatment plans tailored to you. Book your consultation today!",
                                inLanguage: "en-GB",
                                publisher: {
                                    "@id": "https://www.bunionsurgeon.co.uk/#organization",
                                },
                            },
                            {
                                "@type": "WebPage",
                                "@id":
                                    "https://www.bunionsurgeon.co.uk/information/bunion-treatment/#webpage",
                                url: "https://www.bunionsurgeon.co.uk/information/bunion-treatment/",
                                name: "Bunion Surgery | bunionsurgeon",
                                description:
                                    "Find effective bunion treatment in London to say goodbye to bunion pain. Advanced and personalized bunion treatment plans tailored to you. Book your consultation today!",
                                inLanguage: "en-GB",
                                isPartOf: {
                                    "@id": "https://www.bunionsurgeon.co.uk/#website",
                                },
                                breadcrumb: {
                                    "@id":
                                        "https://www.bunionsurgeon.co.uk/information/bunion-treatment/#breadcrumblist",
                                },
                                datePublished: "2024-05-30T15:49:31+01:00",
                                dateModified: "2024-05-30T15:49:31+01:00",
                            },
                        ],
                    })}
                </script>
            </Head>
            <Layout logo={logoImage}>
                <div className={style.headerSec}>
                    <BackgroundLines image={blImage} />
                    <h1>Bunion Treatment in London</h1>
                    <p>
                        Bunions can affect anybody’s foot as a result of constant pressure on the joint of the big toe and
                        sometimes the small toe as well. Most of the time, it occurs due to faulty footwear worn by both
                        men and women in which the feet are confined and always under pressure. The base
                        of the big toe get enlarged or distorted, which may need to be corrected to get back to the original
                        shape and also walk around painlessly.
                    </p>
                </div>
                <div className={style.body}>
                    <h2>What are the Bunion Treatment Options?</h2>
                    <div className={style.splitScreen}>
                        <div className={style.opening}>
                            <p>You specialist will carry out an X-ray to examine what damagae has been done to the bone before
                                starting any treatments. Depending on the severity of the condition, your specialist will advise on a treatment plan. There are non-invasive and invasive bunion treatment options. It depends on your
                                condition as to what plan will be suggested.</p></div>
                        <div className={style.bulletPoints}>
                            <p>Some of the non surgical treatments may include: </p>

                            <ul>
                                <li>Changing shoes: Wearing spacious and comfortable shoes can aid discomfort and stop the bunion deformity deterioating.</li>
                                <li>Ibuprofen (Advil, Motrin IB), Acetaminophen (Tylenol), and naproxen
                                    sodium (Aleve) can relieve the pain. Cortisone injections also help in the same way.</li>
                                <li>Padding: Bunion pads or cushions are available over the counter which can be very
                                    useful for both the pain and in providing support to the painful bone.</li>
                                <li>Shoe inserts: Splints or inserts/ custom orthotics can help to distribute the pressure evenly
                                    during movement. This reduces the inflammation and the pain in the foot. It can also prevents your
                                    bunion from getting worse.</li>
                                <li>Ice application: This can relieve swelling and soreness of the bunion.</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.body2}>
                    <h2>Surgical Bunion Treatment</h2>
                    <div className={style.splitScreen}>
                        <div className={style.bulletPoints}>
                            <p>Some of the surgical treatments may include: </p>

                            <ul>
                                <li>Remove the inflamed tissue from around your big toe joint.</li>
                                <li>Straightening the affected big toe by removing part of the protruded bone.</li>
                                <li>Readjusting one or more bones in the forefoot to a position where the abnormal angle in the
                                    big toe joint will be corrected.</li>
                                <li>Joining the bones of the affected region permanently.</li>
                            </ul>
                        </div>
                        <div className={style.opening}>
                            <p>If the above-mentioned non surgical options do not resolve the pain, or your bunion continues to deterioate, then surgery may be suggested. Surgery is normally not advised to the patient unless the bunion is causing
                                There are quite a few surgical options for bunion treatment in the UK.</p></div>
                    </div>
                </div>
                <div className={style.body3}>
                    <h2>Treatment carried out by an expert Bunion surgeon</h2>
                    <p>Our bunion expert Mr. Kaser Nazir provides options for 4 main types of bunion treatment- minimally
                        invasive keyhole bunion surgery, Lapidus procedure, scarf and akin osteotomy, and tailor’s bunion
                        correction. Minimally invasive Keyhole bunion correction can provide less pain and less amount of time to recover. In the Lapidus,
                        realignment of the bunion is carried out, this is particuarly recommended for patient's with hypermobility. The Lapidus fusion helps to Stabilise the midfoot and also
                        reduces the risk of recurrence. A scarf and akin osteotomy is performed on small to moderate deformities.</p>
                    <p>Mr. Kaser Nazir has been correcting bunions for over 21 years and is an expert in his field. He is covered by a majority of the insurance companies. Both
                        patients and the peers vouch for his bunion treatment options, with glowing reviews following previous Bunion surgeries carried out.</p>
                </div>
                <FrequentQuestions faqBunion={faqBunion} />
            </Layout >
        </>
    );
}
