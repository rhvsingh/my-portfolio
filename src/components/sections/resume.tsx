"use client"

import { motion } from "motion/react"
import { Download, Eye, FileText } from "lucide-react"

import { personalData, resumeData } from "@/constants/seo-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Container from "../ui/container"
import { Badge } from "../ui/badge"

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/path-to-resume.pdf"
        link.download = "Raja_Harsh_Vardhan_Singh_Resume.pdf"
        link.click()
    }

    const handlePreview = () => {
        window.open("/path-to-resume.pdf", "_blank")
    }
    return (
        <section id="resume" className="bg-muted/30 py-20 overflow-hidden" aria-label="Resume section">
            <Container className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl mb-4">Resume</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                        Download my comprehensive resume to know more about my experience, skills, and professional
                        achievements in software development.
                    </p>
                </motion.div>
                <div className="my-12 grid grid-cols-2 md:grid-cols-4 gap-6" aria-label="Resume statistics">
                    {resumeData.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="rounded-2xl bg-background text-center hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground text-sm">{stat.label} </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 bg-background gap-0 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 ">
                        <CardContent className="p-0">
                            <Card className="border-0 shadow-none gap-0 bg-gradient-to-br from-primary/10 to-primary/5">
                                <CardHeader className="text-center">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-primary/20 rounded-full p-4">
                                            <FileText className="h-12 w-12 text-primary" />
                                        </div>
                                    </div>
                                    <hgroup>
                                        <h3 className="text-2xl font-semibold mb-2">{personalData.name}</h3>
                                        <p className="text-lg text-muted-foreground">{personalData.title}</p>
                                    </hgroup>
                                </CardHeader>
                                <CardContent className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 text-sm">
                                    {Object.entries(resumeData.resume).map(([key, section]) => {
                                        return (
                                            <div key={key}>
                                                <h4 className="mb-2  font-medium">{section.label}:</h4>
                                                <ul className="list-disc list-inside text-muted-foreground text-sm">
                                                    {section.items.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </CardContent>
                            </Card>
                            <div className="flex flex-wrap gap-4 justify-center my-8">
                                <Button size="lg" className="rounded-2xl w-full md:w-auto" onClick={handleDownload}>
                                    <Download className="h-5 w-5 mr-2" />
                                    Download Resume
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-2xl w-full md:w-auto"
                                    size="lg"
                                    onClick={handlePreview}
                                >
                                    <Eye className="h-5 w-5 mr-2" />
                                    Preview Resume
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t p-0 flex-col">
                            <div className="flex flex-wrap gap-2 justify-center">
                                {resumeData.pdfInfo.map((info, index) => (
                                    <Badge variant="secondary" className="rounded-full" key={index}>
                                        {info}
                                    </Badge>
                                ))}
                            </div>
                            <div className="text-xs text-muted-foreground mt-4">
                                Last updated: {resumeData.lastUpdated} | File size: ~{resumeData.fileSize}
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>
            </Container>
        </section>
    )
}

export default Resume
