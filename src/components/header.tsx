"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import Container from "./ui/container"
import { Button } from "./ui/button"

import { navItems } from "@/constants/links-data"
import { metaData } from "@/constants/seo-data"
import { cn } from "@/lib/utils"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode((oldMode) => !oldMode)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
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
        }
    }

    return (
        <header
            className={cn(
                "sticky top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50",
                isScrolled && "border-b border-b-border"
            )}
        >
            <Container className="flex justify-between items-center">
                <div className="py-5">{metaData.creator}</div>
                <nav className="ml-auto">
                    <ul className="flex gap-6">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    id={item.id}
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
                <Button className="mx-5 cursor-pointer" variant="ghost" size="icon" onClick={toggleTheme}>
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </Container>
        </header>
    )
}

export default Header
