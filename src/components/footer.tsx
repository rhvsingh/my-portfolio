"use client"

import { motion } from "motion/react"
import { ArrowUp, Mail, MapPin } from "lucide-react"

import Container from "./ui/container"
import { Button } from "./ui/button"
import { metaData, personalData } from "@/constants/seo-data"
import { navItems, socialLinks } from "@/constants/links-data"
import RotatingEarth from "./three/rotating-earth"

const Footer = () => {
    return (
        <footer className="border-t bg-muted/50 px-4 pt-8 pb-5 overflow-hidden" aria-label="Site footer">
            <Container>
                <div className="py-4 flex flex-col lg:flex-row justify-between gap-8" aria-label="Footer top section">
                    <motion.div
                        className="space-y-4 flex-2/5"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-3">
                            <RotatingEarth />
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
                    </motion.div>
                    <motion.div
                        className="space-y-4 flex-1/12 lg:flex-1/5"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>
                    <motion.div
                        className="space-y-4 flex-1/3"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>
                </div>
                <motion.div
                    className="mt-4 flex items-center justify-between text-sm py-6 border-t"
                    aria-label="Footer bottom section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
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
                </motion.div>
            </Container>
        </footer>
    )
}

export default Footer
