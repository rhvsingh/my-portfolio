import { Award, Briefcase, Code, FileText } from "lucide-react"

export const personalData = {
    name: "Raja Harsh Vardhan Singh",
    email: "singhrajaharshvardhan004@gmail.com",
    title: "MERN Stack Developer",
}

export const resumeData = {
    stats: [
        { icon: Briefcase, label: "Years Experience", value: "3+" },
        { icon: Code, label: "Projects Completed", value: "50+" },
        { icon: Award, label: "Certifications", value: "12" },
        { icon: FileText, label: "Technologies", value: "25+" },
    ],
    resume: {
        keySkills: {
            label: "Key Skills",
            items: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "Three.js"],
        },
        experiences: {
            label: "Experience",
            items: [
                "TechPix - Front End Web Developer Intern",
                "IIT Bombay - Front End Developer Intern",
                "VgetFresh - Full Stack Developer Intern",
                "Freelance Projects - Various Clients",
                "Personal Projects - Portfolio Website, E-commerce Site, Blog Platform",
            ],
        },
    },
    pdfLink: "/Raja_Harsh_Vardhan_Singh_Resume.pdf",
    pdfFileName: "Raja_Harsh_Vardhan_Singh_Resume.pdf",
    pdfInfo: ["PDF Format", "ATS Friendly", "Interactive"],
    lastUpdated: "August 2023",
    fileSize: "250 KB",
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
