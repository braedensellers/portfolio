import { useEffect } from "react"

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-500 transition duration-300">
                        &lt;BS/&#62;
                    </a>
                    
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev: boolean) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#home" className="text-slate-400 hover:text-white transition duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-slate-400 hover:text-white transition duration-300">
                            About
                        </a>
                        <a href="#projects" className="text-slate-400 hover:text-white transition duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-slate-400 hover:text-white transition duration-300">
                            Contact
                        </a>
                        {/* <button 
                            className="text-slate-400 hover:text-white transition duration-300"
                            onClick={() => {
                                document.documentElement.classList.toggle('dark');
                            }}
                        >
                            🌙
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}