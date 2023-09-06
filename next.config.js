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
                source: '/scarf-and-akin-osteotomy-bunion-surgery',
                destination: '/blog/scarf-and-akin-osteotomy-bunion-surgery',
                permanent: true,
            },
            {
                source: '/national-bunion-day',
                destination: '//blog/national-bunion-day',
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
                source: '/surgeon-biography',
                destination: '/about',
                permanent: true,
            },

        ]
    },
    images: {
        domains: ['images.ctfassets.net'],
    }
})
