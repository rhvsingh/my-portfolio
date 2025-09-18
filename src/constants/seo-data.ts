export const personalData = {
    name: "Raja Harsh Vardhan Singh",
    email: "singhrajaharshvardhan004@gmail.com",
}

const siteTitle = `${personalData.name} - MERN Stack Developer`
const siteDescription = `Portfolio of ${personalData.name}, a passionate MERN Stack Developer with expertise in modern web technologies and Three.js animations.`
const keywords = "MERN Stack Developer, React, Node.js, MongoDB, Express.js, Three.js, Portfolio, Web Developer"

export const metaData = {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords,
    author: [{ name: personalData.name }],
    creator: personalData.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://your-portfolio-domain.com",
        title: siteTitle,
        description: siteDescription,
        siteName: `${personalData.name} Portfolio`,
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        image: "https://your-portfolio-domain.com/og-image.jpg",
    },
    robots: {
        index: true,
        follow: true,
    },
}
