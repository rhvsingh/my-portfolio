import Footer from "@/components/footer"
import Header from "@/components/header"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Resume from "@/components/sections/resume"
import Skills from "@/components/sections/skills"

export default function Home() {
    return (
        <main className="">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Footer />
        </main>
    )
}
