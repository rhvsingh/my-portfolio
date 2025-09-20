"use client"

import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"
import { personalData } from "@/constants/seo-data"
import { socialLinks } from "@/constants/links-data"
import { models } from "@/constants/models-data"
import TheHills from "../three-modals/the-hills"
import Container from "../ui/container"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import GreatMountain from "../three-modals/great-mountain"
import CloudyMountain from "../three-modals/cloudy-mountain"

const Hero = () => {
    const [selectedModel, setSelectedModel] = useState(models[0].id)

    useEffect(() => {
        const stored = localStorage.getItem("selectedModel")
        if (stored) setSelectedModel(stored)
    }, [])

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem("selectedModel", event.target.value)
        setSelectedModel(event.target.value)
    }

    const ModelRenderer = () => {
        switch (selectedModel) {
            case "the-hills":
                return <TheHills />
                break
            case "great-mountain":
                return <GreatMountain />
                break
            case "cloudy-mountain":
                return <CloudyMountain />
                break
            default:
                return <TheHills />
        }
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center overflow-hidden relative"
            aria-label="Hero section"
        >
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-7xl font-normal bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4 mb-4"
                        aria-label="Hero title"
                    >
                        {personalData.name}
                    </motion.h1>
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                        className="text-2xl text-muted-foreground"
                    >
                        {personalData.title}
                    </motion.p>
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                        className="text-lg mx-auto max-w-xl text-muted-foreground"
                    >
                        Crafting exceptional digital experiences with modern web technologies and immersive 3D
                        interactions. Passionate about creating scalable, user-centric applications that make a
                        difference.
                    </motion.p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <Button className="rounded-2xl min-w-40 cursor-pointer" size="lg">
                                View My Work
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Button className="rounded-2xl min-w-40 cursor-pointer" size="lg" variant="outline">
                                Contact Me
                            </Button>
                        </motion.div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-6" aria-label="Social media links">
                        {socialLinks.map(
                            (link, index) =>
                                link.title !== "Twitter" && (
                                    <motion.a
                                        key={link.link}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.15 }}
                                        aria-label={link.title}
                                        className="block p-2 rounded-full hover:bg-background hover:scale-110 transition-transform"
                                    >
                                        <link.icon className="h-4 w-4" />
                                    </motion.a>
                                )
                        )}
                    </div>

                    <motion.div
                        className="w-6 h-6  border-muted-foreground mx-auto mt-2 animate-bounce cursor-pointer"
                        onClick={() => {
                            const element = document.getElementById("about")
                            element?.scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    </motion.div>
                </div>

                <ModelRenderer />

                <div className="absolute right-3 bottom-3 z-10 opacity-70">
                    <select
                        name="model"
                        id="model"
                        className="bg-transparent text-sm border-b border-b-slate-200 p-2 transition duration-300 ease focus:outline-none focus:border-white hover:border-white shadow-sm focus:shadow-md cursor-pointer text-white"
                        value={selectedModel}
                        onChange={handleModelChange}
                        aria-label="Select 3D Model"
                    >
                        {models.map((model) => (
                            <option key={model.id} value={model.id} className="text-black">
                                {model.name}
                            </option>
                        ))}
                    </select>
                </div>
            </Container>
        </section>
    )
}

export default Hero
