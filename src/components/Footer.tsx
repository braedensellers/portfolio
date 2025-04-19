import { Github, Linkedin } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center mb-4 md:mb-0 md:text-left">
                        <span className="font-mono text-xl font-bold text-white">
                            &lt;BS/&#62;
                        </span>
                        <p className="text-md text-slate-400 mt-2 max-w-md">
                            "A future is not given to you. It is something you must take for yourself." — Pod 042, Nier Automata
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex space-x-4 mb-4">
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
                        <div className="text-gray-400 text-sm text-right">
                            <p>
                                &copy; {new Date().getFullYear()} Braeden Sellers | Built with React and Tailwind
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}