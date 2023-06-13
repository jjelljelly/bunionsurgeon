import { BackgroundLines } from "../components/home/BackgroundLines";
import { Layout } from "../components/templates/Layout";
import { getPlaiceholder } from "plaiceholder";
import style from './Privacy.module.css'

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

export default function Privacy({ blImage, logoImage }) {
    return (
        <>
            <Layout logo={logoImage}>
                <div className={style.headerSec}>
                    <BackgroundLines image={blImage} />
                    <h1>Privacy Policy</h1>
                </div>
                <div className={style.mainDiv}>
                    <div>
                        <h2>
                            Introduction
                        </h2>
                        <p>This privacy policy sets out how The London Foot And Ankle Surgery Limited (LFAS) uses and protects any information that you give when you use this website.
                        </p>
                        <p>LFAS is committed to complying with the Data Protection Act 1998, the General Data Protection Regulation (GDPR), Health and Care Professions Council (HCPC), National Health Service (NHS) and other standards. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
                        <p>LFAS only keeps relevant information about patients to provide them with safe and appropriate health care. LFAS may change this policy from time to time by updating this page. You should check this page in the future to ensure that you are happy with any changes. This policy is effective from 24.05.2018</p>
                    </div>
                    <div>
                        <h2>
                            Who Can Help
                        </h2>
                        <p>The person responsible for Data Protection is: Mr. Kaser Nazir, Information Governance Lead, who you can reach via – F.A.O. Mr Kaser Nazir, 17 Harley Street, London, W1G 9QH (or by email – admin@londonfootandanklesurgery.co.uk)</p>
                    </div>
                    <div className={style.bulletDiv}>
                        <h2>
                            What We Collect
                        </h2>
                        <p>We may collect the following information:</p>
                        <ul className={style.bulletPoints}>
                            <li>Name</li>
                            <li>Contact information including email address</li>
                            <li>Demographic information such as postcode, preferences and interests</li>
                            <li>Other information relevant to customer surveys and/or offers</li>
                            <li>Information relating to health</li>
                            <li>Payment information</li>
                        </ul>
                        <p>We will store your information on an electronic patient record and diary system, which is fully password protected.</p>
                    </div>
                    <div className={style.bulletDiv}>
                        <h2>What We Do With The Information We Gather</h2>
                        <p2>We require this information to understand your health needs and provide you with a better service, and in particular for the following reasons:</p2>
                        <ul className={style.bulletPoints}>
                            <li>Internal record keeping;</li>
                            <li>We may use the information to improve our products and services;</li>
                            <li>Where it is necessary for the purposes of the provision of health care as needed to provide our services, such as when we use your information to fulfil your assessment and treatment, or to provide customer support;</li>
                            <li>If necessary to comply with a legal obligation or court order or in connection with a legal claim, such as retaining information about your purchases if required by tax law;</li>
                        </ul>
                    </div>
                    <div className={style.bulletDiv}>
                        <h2>Sharing Your Data</h2>
                        <p>To facilitate patients’ health care, the personal information you provide may be disclosed to a:</p>
                        <ul className={style.bulletPoints}>
                            <li>Doctor</li>
                            <li>Health care professional</li>
                            <li>Third party involved in delivering our services</li>
                            <li>Hospital</li>
                            <li>NHS authorities</li>
                            <li>Private insurance schemes of which the patient is a member</li>
                        </ul>
                        <p>In all cases only relevant information is shared. In very limited cases, such as for identification purposes, or if required by law, information may have to be shared with a party not involved in the patient’s health care. In all other cases, information is never disclosed to such a third party without the patient’s written authority.</p>
                    </div>
                    <div>
                        <h2>Security</h2>
                        <p>Hard copy and computerised records are stored, reviewed and updated securely and confidentially. Records are securely destroyed when no longer required. Confidential information is only seen by personnel who need to see it and the team are trained on our policies and procedures to keep patient information confidential.</p>
                        <p>All confidential information is sent via secure methods. Electronic communications and stored data are encrypted. All computerised clinical records are backed up and encrypted copies are kept off-site. No information or comments about patients are posted on social networking or blogging sites.</p>
                    </div>
                    <div>
                        <h2>Data Breach</h2>
                        <p>LFAS has appropriate procedures to ensure personal data breaches are detected, reported and investigated effectively, including procedures to assess and then report any breaches to the Information Commissioner’s Office (ICO) where the individual is likely to suffer some form of damage, e.g. through identity theft or confidentiality breach.</p>
                        <p>LFAS will report serious data breaches to the ICO within 72 hours of becoming aware of the essential facts. The practice will keep a log of all personal data breaches and record the basic facts, effects of the breach and remedial action taken.</p>
                    </div>
                    <div className={style.bulletDiv}>
                        <h2>Accessing Your Information</h2>
                        <p>Patients and team members can have access to view the original of their records free of charge. Copies of patient or team member records are provided following a written request to Mr Kaser Nazir, 17 Harley Street, London, W1G 9QH (or by email to admin@londonfootandanklesurgery.co.uk). The requested copies will be provided within 1 month on receipt of request.</p>
                        <p>A patient may challenge information held on record and, following investigation, should the information be inaccurate LFAS will correct the records and inform the patient of the change in writing.</p>
                        <p>When the request for information is about the personal data of a child, LFAS will consider if the child is mature enough to understand their rights. If they do, then LFAS will consider responding directly to the child rather than the parent. If it is decided that the child is not mature enough to understand their rights, and there is some doubt about parental responsibility, proof of identity and evidence of parental responsibility will be requested.</p>
                        <p>When the practice receives a third-party request for information on someone else’s behalf (e.g. from a solicitor) evidence of their permission will be requested, this could be a written authority to make a request or a power of attorney.</p>
                        <p>When LFAS receives a third-party request for information for a patient who lacks the mental capacity to manage their affairs LFAS will ask to see evidence of a Lasting Power of Attorney or the evidence of appointment by:</p>
                        <ul className={style.bulletPoints}>
                            <li>The Court of Protection in England & Wales;
                            </li>
                            <li>The Sheriff Court in Scotland; and</li>
                            <li>The High Court (Office of Care and Protection) in Northern Ireland</li>
                        </ul>
                    </div>
                    <div>

                        <h2>Consent For Marketing</h2>
                        <p>When we obtain consent for marketing such as email marketing, this consent is specific, granular, clear, prominent, opt-in, documented and easily withdrawn. We have a system used to record consent and implement appropriate mechanisms in order to ensure an effective audit trail.</p>
                        <p>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at admin@londonfootandanklesurgery.co.uk</p>
                    </div>
                    <div>

                        <h2>Data Retention</h2>
                        <p>LFAS retains your personal information only for as long as necessary to provide you with our services and as described in this Privacy Policy. However, we may also be required to retain this information to comply with our legal and regulatory obligations, to resolve disputes, and to enforce our agreements. The retention of podiatry records is normally a minimum of 8 years, after the last appointment. For customers who are not patients but may have bought products from our business, we will keep any data you may have provided for a minimum of 6 years in line with tax legislation.</p>
                        <p>Personal data in electronic or paper format are deleted in accordance with our Data Retention Schedule. If not related to necessary clinical records we will delete personal data.</p>
                    </div>
                    <div>
                        <h2>How We Use Cookies</h2>
                        <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                        <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
                        <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
                    </div>
                    <div>
                        <h2>Links to Other Websites</h2>
                        <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.

                        </p>
                    </div>
                    <div>
                        <h2>Transfers of Personal Data Outside of the EU</h2>
                        <p>In the course of running our business and providing healthcare to clients we may transfer personal data to third parties located in other countries, including countries outside the EEA. Where we transfer personal data to a country not determined by the European Commission to provide an adequate level of protection for personal data, we will only do so under a form of agreement approved by the European Commission, such as the Standard Contractual Clauses</p>
                    </div>
                    <div className={style.bulletDiv}>
                        <h2>Lawful Basis For Processing Data</h2>
                        <p>Processing is necessary for the performance of our care for patients. We rely on a number of legal bases to collect, use, and share your information, including</p>
                        <ul className={style.bulletPoints}>
                            <li>Where it is necessary for the purposes of the provision of health care as needed to provide our services, such as when we use your information to fulfil your assessment and treatment, or to provide customer support;</li>
                            <li>When you have provided your affirmative consent, which you may revoke at any time, such as by signing up for my mailing list;</li>
                            <li>If necessary to comply with a legal obligation or court order or in connection with a legal claim, such as retaining information about your purchases if required by tax law;</li>

                        </ul>
                    </div>
                </div>

            </Layout>

        </>
    )
}