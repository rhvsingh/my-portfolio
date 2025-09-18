"use client"

import Container from "./ui/container"
import { metaData, personalData } from "@/constants/seo-data"
import { ArrowUp, Mail, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { navItems, socialLinks } from "@/constants/links-data"

const Footer = () => {
    return (
        <footer className="border-t bg-muted/50 px-4">
            <Container>
                <div
                    className="py-4 flex flex-col lg:flex-row justify-between gap-8 lg:gap-4"
                    aria-label="Footer top section"
                >
                    <div className="space-y-4 flex-6/12">
                        <div>
                            <h2>{personalData.name}</h2>
                        </div>
                        <p className="text-muted-foreground">{metaData.description}</p>
                        <ul className="flex space-x-4 mt-2" aria-label="Social media links">
                            {socialLinks.map((link) => (
                                <li key={link.link}>
                                    <a
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.title}
                                        className="bg-black/80 hover:bg-black/30 rounded-full p-2 block transition-colors"
                                    >
                                        <link.icon className="h-5 w-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4 flex-2/12">
                        <h3>Quick Links</h3>
                        <ul className="space-y-2" aria-label="Footer navigation links">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-muted-foreground hover:text-accent-foreground cursor-pointer hover:no-underline"
                                        aria-label={`Navigate to ${item.label} section`}
                                        onClick={() => {
                                            const element = document.getElementById(item.id)
                                            element?.scrollIntoView({ behavior: "smooth" })
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4 flex-4/12">
                        <h3>Get In Touch</h3>
                        <ul className="space-y-2" aria-label="Contact information">
                            <li>
                                <a href={`mailto:${personalData.email}`} className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span className="text-muted-foreground hover:text-accent-foreground transition-colors">
                                        {personalData.email}
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" /> <span className="text-muted-foreground">India</span>
                            </li>
                            {/* <li className="text-muted-foreground">Open to relocation</li> */}
                            <li className="text-muted-foreground text-sm">
                                Available for freelance work and full-time opportunities
                            </li>
                            <li>
                                <Button className="rounded-full" size="sm" variant="outline">
                                    Hire Me
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="mt-4 flex items-center justify-between text-sm py-6 border-t"
                    aria-label="Footer bottom section"
                >
                    <div className="text-muted-foreground">
                        &copy; 2025 {personalData.name}. Made with ❤️ and lots of ☕ & Three.js ✨
                    </div>
                    <div>
                        <Button
                            className="cursor-pointer"
                            size="icon"
                            variant="ghost"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
