import { Layout } from "../components/templates/Layout";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import style from './404.module.css'

export async function getStaticProps() {

    const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
        "/images/bunion-logo.png"
    );
    return {
        props: {

            logoImage: {
                ...logoImg,
                blurDataURL: logoBase64,
            },

        },
    };
}


export default function Custom404({ logoImage }) {
    return (
        <>
            <Head />
            <Layout logo={logoImage}>
                <div className={style.layout}><h2>Oh no! The page you are looking for does not exist.</h2>
                    <p>Try to navigate back to the homepage</p></div>
            </Layout>
        </>


    )
}