import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"

export const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
]

export const socialLinks = [
    {
        link: "https://github.com/rhvsingh",
        title: "GitHub",
        icon: FiGithub,
    },
    {
        link: "https://www.linkedin.com/in/rhvsingh/",
        title: "LinkedIn",
        icon: FiLinkedin,
    },
    {
        link: "https://twitter.com/rhvsingh",
        title: "Twitter",
        icon: FaXTwitter,
    },
    {
        link: "mailto:singhrajaharshvardhan004@gmail.com",
        title: "Email",
        icon: FiMail,
    },
]
