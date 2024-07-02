import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { Layout } from "../../components/templates/Layout";
import { getPlaiceholder } from "plaiceholder";
import style from "./information.module.css";


export async function getStaticProps() {
    const { base64: blBase64, img: blImg } = await getPlaiceholder(
        "/images/abstract-lines.png"
    );
    const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
        "/images/bunion-logo.png"
    );

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
        },
    };
}

export default function BunionSurgeon({
    blImage,
    logoImage,
}) {
    return (
        <>
            <Head>
                <title>Bunion Surgery London at Premier Bunion Clinics | Bunionsurgeon.co.uk</title>
                <meta
                    name="description"
                    content="Bunion surgery in London made simple. Our compassionate team delivers expert care
                    and innovative bunion solutions for lasting relief. Schedule your appointment today!"
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
                                    "https://www.bunionsurgeon.co.uk/information/surgeon/#breadcrumblist",
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
                                                "Bunion surgery in London made simple. Our compassionate team delivers expert care and innovative bunion solutions for lasting relief. Schedule your appointment today!",
                                            url: "https://www.bunionsurgeon.co.uk/",
                                        },
                                        nextItem:
                                            "https://www.bunionsurgeon.co.uk/information/bunion-surgeon/#listItem",
                                    },
                                    {
                                        "@type": "ListItem",
                                        "@id":
                                            "https://www.bunionsurgeon.co.uk/information/bunion-surgeon/#listItem",
                                        position: 2,
                                        item: {
                                            "@type": "WebPage",
                                            "@id":
                                                "https://www.bunionsurgeon.co.uk/information/bunion-surgeon/",
                                            name: "Lapidus Fusion Procedure",
                                            description:
                                                "Bunion surgery in London made simple. Our compassionate team delivers expert care and innovative bunion solutions for lasting relief. Schedule your appointment today!",
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
                                    "Bunion surgery in London made simple. Our compassionate team delivers expert care and innovative bunion solutions for lasting relief. Schedule your appointment today!",
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
                                    "Bunion surgery in London made simple. Our compassionate team delivers expert care and innovative bunion solutions for lasting relief. Schedule your appointment today!",
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
                    <h1>Expert Bunion Surgeon in London</h1>
                    <p>
                        Bunions can be an extremly painful condition which can affect daily activities. Expert Bunion surgeon, Mr Kaser Nazir, can assess and discuss options to resolve your Bunion deformity.
                    </p>
                </div>
                <div className={style.body}>
                    <h2>What does Bunion Surgery Involve?</h2>
                    <div className={style.body}>
                        <p>Bunion surgery, or bunion removal, reduces the pain and rectifies the deformity caused by a
                            bunion on your big toe. A bunion, also known as a hallux valgus deformity or Tailor's bunion deformity, is a protruding bone
                            or tissue around a joint at the base of a big or little toe.</p>
                        <p>
                            The most common cause of bunion is stress on the joint over a prolonged period. It is often
                            seen occurring in women’s feet due to tight fitting pointed shoes
                            that confine the toes, specifically the base of big and little toes. These can also be hereditary and
                            may result from arthritis in older people.</p>
                    </div>
                </div>
                <div className={style.body2}>
                    <h2>When do I need Bunion Surgery</h2>
                    <div className={style.body2}>
                        <p>You may be advised on bunion removal surgery when the pain is intolerable and you find walking very
                            difficult. Bunion surgery is also required when the swelling becomes chronic and does
                            not go away with anti-inflammatory medicines.</p>
                        <p>Sometimes, the big toe cannot be straightened or bent in any
                            direction, and it starts moving towards the small toe. In these situations, bunion removal
                            surgery becomes necessary.</p>

                    </div>
                </div>
                <div className={style.body3}>
                    <h2>Which type of Surgery is Recommended?</h2>
                    <div className={style.splitScreen}>
                        <div className={style.bulletPoints}>
                            <p>Surgery depends on the severity of a Bunion: </p>

                            <ul>

                                <li>Mild Bunion: Surgery involves the removal of the enlarged
                                    portion of bone while reinstating the tendons, muscles, sinews, and ligaments surrounding
                                    the joint.</li>
                                <li>Moderate Bunion: The surgeon cuts and changes the position of the bone to a moderate Bunion.</li>
                                <li>Severe Bunion: For a severe bunion, the surgery will involve removing the
                                    enlarged portion of the bone by cutting and readjusting the bone while correcting the
                                    position of the ligaments and tendons.</li>
                                <li>Arthitic big toe: As the joint is damaged due to arthritis, the bone is fused with the joint so they heal
                                    together. It eliminates pain and eases movement. Sometimes, joint replacement surgery
                                    is instead carried out to reconstruct the big toe joint.</li>
                            </ul>
                        </div>
                        <div className={style.opening}>
                            <p>Surgeons perform different types of bunion surgeries in the UK, depending on their expertise. It also depends on the severity
                                of an individual's Bunion deformity, as well as their  overall health condition and activity level. The condition of
                                bones and connective tissue govern the type of surgery that would be deemed appropriate to
                                correct the problem. This may involve minimally invasive bunion surgery, the scarf and akin osteotomy or Lapidus fusion.</p></div>
                    </div>
                    <p>Mr. Nazir is an expert at minimal invasive keyhole bunion surgery, which causes less swelling, less
                        pain, and a faster return to normal activites. This specialised Bunion surgery technique involves a smaller incision resulting in a less visible scar.
                    </p>
                    <p>Visit our Bunion surgery pricing page for further information or contact us today to arrange an appointment</p>
                </div>
            </Layout >
        </>
    );
}
