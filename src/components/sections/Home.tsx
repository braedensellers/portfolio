import { Typewriter } from "react-simple-typewriter"
import { RevealOnScroll } from "../RevealOnScroll"
import { Github, Linkedin } from "lucide-react"

export const Home = () => {
    const titles = [
        "Full-Stack Engineer",
        "Web Developer",
        "DevOps Enthusiast",
        "Cloud Engineer",
        "Self-Taught Dev",
        "Quick Learner",
        "Software Engineer",
        "System Admin",
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="rounded-xl p-6 transition-all">
                    <div className="group relative">
                        <p className="flex text-4xl font-bold mb-6 text-slate-400 transition-transform duration-300">
                            Hey,
                            <span className="inline-block origin-bottom-right animate-wave opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                👋
                            </span>
                        </p>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-blue-400 to-blue-800 bg-clip-text text-transparent">
                        <span className="font-bold text-slate-400">I'm </span>
                        Braeden Sellers
                    </h3>
                    <h3 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="inline-block min-w-[10ch]">
                            <Typewriter
                                words={titles}
                                loop={0}
                                cursor
                                cursorStyle="█"
                                cursorBlinking={true}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        I build high-performance, production-grade software that blends clean architecture,
                        precise engineering, and refined user experience into products that teams can trust at scale.
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:scale-105 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            See My Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:scale-105 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>

                        <div className="flex items-center justify-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
                            <a
                                href="https://github.com/braedensellers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-200 hover:text-amber-300 hover:scale-115 transition duration-200 ease p-2"
                                aria-label="GitHub"
                            >
                                <Github size={28} />
                            </a>

                            <a
                                href="https://linkedin.com/in/braeden-sellers-b2072033b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-200 hover:text-amber-300 hover:scale-115 transition duration-200 ease p-2"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={28} />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
    )
}