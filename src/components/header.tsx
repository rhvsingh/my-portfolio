"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Menu, Moon, Sun, X } from "lucide-react"

import Container from "./ui/container"
import { Button } from "./ui/button"

import { navItems } from "@/constants/links-data"
import { metaData } from "@/constants/seo-data"
import { cn } from "@/lib/utils"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode((oldMode) => !oldMode)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <motion.header
            className={cn(
                "sticky top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50",
                isScrolled && "border-b border-b-border"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Site header"
        >
            <Container className="flex justify-between items-center px-4 relative">
                <div className="py-5 text-xl font-semibold">{metaData.creator}</div>
                {/* Desktop Navigation */}
                <nav className="ml-auto lg:block hidden" aria-label="Primary navigation">
                    <ul className="flex gap-6">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    className="cursor-pointer
                                    underline
                                    decoration-transparent
                                    hover:decoration-white
                                    underline-offset-8
                                    transition-colors"
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Button
                    className="ml-auto mr-5 lg:ml-5 cursor-pointer"
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                >
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button
                    className="ml-2 cursor-pointer block lg:hidden"
                    variant="outline"
                    size="sm"
                    aria-label="Open menu"
                    onClick={() => setIsMobileMenuOpen((oldMenuValue) => !oldMenuValue)}
                >
                    {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
            </Container>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <Container>
                    <nav className="lg:hidden border-t border-border" aria-label="Mobile navigation">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="py-4"
                        >
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full cursor-pointer text-left py-2 hover:text-primary transition-colors duration-200"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </motion.div>
                    </nav>
                </Container>
            )}
        </motion.header>
    )
}

export default Header
