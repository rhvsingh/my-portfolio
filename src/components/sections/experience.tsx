import Container from "../ui/container"

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen flex items-center overflow-hidden"
            aria-label="Experience section"
        >
            <Container>
                Experience
                <div>
                    <img
                        src="https://picsum.photos/1000"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        alt=""
                    />
                </div>
            </Container>
        </section>
    )
}

export default Experience
