import { RevealOnScroll } from "../RevealOnScroll"
import { Carousel } from "../Carousel"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text">
                        Projects
                    </h2>

                    <Carousel />
                </div>
            </RevealOnScroll>
        </section>
    )
}