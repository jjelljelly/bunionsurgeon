const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
    async redirects() {
        return [
            {
                source: '/bunion',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/first-mtp-joint',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/traditional-bunionectomy',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/fees-and-costs',
                destination: '/pricing',
                permanent: true,
            },
            {
                source: '/self-funding-fees',
                destination: '/pricing',
                permanent: true,
            },
            {
                source: '/international-patients',
                destination: '/',
                permanent: true,
            },
            {
                source: '/surgical-timeline',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/the-day-of-surgery',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/hallux-valgus-vs-hallux-limitus',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/what-is-a-bunion',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/conservative-treatment',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/symptom-checker',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/keyhole-bunion-surgery',
                destination: '/blog/keyhole-bunion-surgery',
                permanent: true,
            },
            {
                source: '/preparing-for-surgery',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/private-insurance',
                destination: '/pricing',
                permanent: true,
            },
            {
                source: '/revision-surgery',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/the-risks-of-bunion-surgery',
                destination: '/blog/the-risks-of-bunion-surgery',
                permanent: true,
            },
            {
                source: '/scarf-akin-osteotomy-bunion-surgery',
                destination: '/blog/scarf-&-akin-osteotomy-–-bunion-surgery',
                permanent: true,
            },
            {
                source: '/national-bunion-day',
                destination: '/blog/national-bunion-day',
                permanent: true,
            },
            {
                source: '/running-the-london-marathon-with-bunions',
                destination: '/blog/running-the-london-marathon-with-bunions',
                permanent: true,
            },
            {
                source: '/how-to-recognise-a-bunion',
                destination: '/blog/how-to-recognise-a-bunion',
                permanent: true,
            },
            {
                source: '/how-to-recognise-a-bunion/1000',
                destination: '/blog/how-to-recognise-a-bunion',
                permanent: true,
            },
            {
                source: '/surgeon-biography',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/463af5c3-e4ef-4f36-877d-447d16f3b627',
                destination: '/',
                permanent: true,
            },
            {
                source: '/bunioncorrection',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/lapidus-fusion-procedure',
                destination: '/surgeries/lapidus-fusion-procedure',
                permanent: true,
            },
            {
                source: '/keyhole-bunion-surgery',
                destination: '/surgeries/minimally-invasive-keyhole-bunion-surgery',
                permanent: true,
            },
            {
                source: '/minimally-invasive-bunion-surgery',
                destination: '/surgeries/minimally-invasive-keyhole-bunion-surgery',
                permanent: true,
            },
            {
                source: '/surgeries/minimally-invasive-bunion-surgery',
                destination: '/surgeries/minimally-invasive-keyhole-bunion-surgery',
                permanent: true,
            },
            {
                source: '/scarf-and-akin-osteotomy',
                destination: '/surgeries/scarf-and-akin-osteotomy',
                permanent: true,
            },
            {
                source: '/bunionette',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/hallux-varus',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/after-surgery',
                destination: '/before-after-gallery',
                permanent: true,
            },
            {
                source: '/book-an-appointment',
                destination: '/getintouch',
                permanent: true,
            },
            {
                source: '/gallery',
                destination: '/before-after-gallery',
                permanent: true,
            },
            {
                source: '/surgeries/lapidus',
                destination: '/surgeries/lapidus-fusion-procedure',
                permanent: true,
            },
            {
                source: '/surgeries/minimally-invasive/',
                destination: '/surgeries/minimally-invasive-keyhole-bunion-surgery',
                permanent: true,
            },
            {
                source: '/blog/[slug]',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/information/surgeon/',
                destination: '/information/bunion-surgeon',
                permanent: true,
            },
            {
                source: '/surgical-timeline/admin@bunionsurgeon.co.uk',
                destination: '/surgery',
                permanent: true,
            },
            {
                source: '/lsurgeries/lapidus/',
                destination: '/surgeries/lapidus-fusion-procedure',
                permanent: true,
            },
            {
                source: '/privacy-policy/',
                destination: '/privacy',
                permanent: true,
            },
            {
                source: '/feed/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/e1346bab-ba6b-4e25-b95c-e3a6dc41dbb5/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/9a2fab2f-3e0b-4bcd-9a37-028de314691d-2/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/c516daac-55e3-4fb4-8ef8-953c2f1129f5/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/image/',
                destination: '/before-after-gallery',
                permanent: true,
            },
            {
                source: '/_next/image?url=/images/lapidus-image.jpg&amp;w=3840&amp;q=75',
                destination: '/surgeries/lapidus-fusion-procedure',
                permanent: true,
            },
        ]
    },
    images: {
        domains: ['images.ctfassets.net'],
    }
})
