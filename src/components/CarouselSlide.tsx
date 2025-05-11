import { ArrowUpRight, Github } from "lucide-react";

interface CarouselSlideProps {
    title: string;
    description: string;
    skills: string[];
    githubLink: string;
    projectLink: string;
    image: string;
}

export const CarouselSlide = ({ title, description, skills, githubLink, projectLink, image }: CarouselSlideProps) => {
    return (
        <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden group">
            <div className="w-full h-48 overflow-hidden mb-2 object-cover">
                <img
                    src={image}
                    alt={title} 
                    className="object-cover w-full h-full transition-transform duration-300 rounded-t-lg hover:filter-none group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center group">
                    <a href={projectLink} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors text-decoration-none font-semibold">
                        View Project
                        <ArrowUpRight className="inline-block ml-1 group-hover:-translate-y-1 transition-transform ease" size={16} strokeWidth={2.5} />
                    </a>
                </div>

                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 text-slate-200 hover:text-amber-300 hover:scale-110 hover:border-white/10 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition duration-200 ease bg-white/30 rounded-full p-2 flex items-center justify-center"
                    aria-label="GitHub"
                >
                    <Github size={28} />
                </a>
            </div>
        </div>
    )
}