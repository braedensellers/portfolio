import { RevealOnScroll } from "../RevealOnScroll"
import { Box, BrainCircuit, Briefcase, Brush, Cpu, Download, GraduationCap, PanelsTopLeft, Server } from "lucide-react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export const About = () => {
    const frontendSkills = [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Typescript",
        "Angular",
    ]

    const backendSkills = [
        "Python",
        "C#",
        "Express",
        "MongoDB",
        "REST API",
        "MySQL",
        "Firebase",
    ]

    const devOpsSkills = [
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Jenkins",
        "CI/CD",
        "Ansible",
        "Helm",
    ]

    const designSkills = [
        "UI/UX",
        "Figma",
        "Adobe AI & XD",
        "Prototyping",
        "Responsive",
        "Accessibility"
    ]

    const toolsAndTechnologiesSkills = [
        "Git",
        "MS Office",
        "Jira",
        "Slack",
        "Postman",
        "VS Code",
        "Linux",
        "Agile/Scrum"
    ]

    const aiAndMachineLearningSkills = [
        "Python",
        "OpenAI API",
        "TensorFlow",
        "PyTorch",
        "Prompt Engineering"
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text">
                        About Me
                    </h2>
                    
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-amber-300 transition-all">
                        <p className="text-slate-400 mb-6">
                            I turn ideas into beautiful, scalable, and performant web experiences — with a strong emphasis 
                            on user experience and accessibility. I take pride in my work and have a meticulous eye for detail,
                            always striving to build products that are polished, intuitive, and meaningful. Whether I'm crafting 
                            an interface or refining an interaction, my goal is to create work that resonates with users and meets
                            business needs.
                        </p>

                        <p className="text-slate-400 mb-6">
                            <span className="hover:animate-ping">🟢 </span>
                            I'm currently seeking new opportunities where I can bring my energy, attention to detail, and love 
                            for technology to projects that make an impact.
                        </p>

                        <div className="flex flex-col items-center gap-4 mt-6">
                            <a href="/Braeden Sellers Resume.pdf" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:scale-105 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] flex items-center gap-2">
                                <Download className="h-5 w-5" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="max-w-5xl mx-auto px-4 mt-12">
                    <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text">
                        Technical Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <PanelsTopLeft className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    Front-End
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <Server className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    Back-End
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <Box className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    DevOps
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {devOpsSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <Brush className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    Design
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {designSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <Cpu className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    Tools & Technologies
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {toolsAndTechnologiesSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 border-white/10 border hover:scale-105 transition-all group">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="p-2 bg-blue-600/10 rounded-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    <BrainCircuit className="h-6 w-6 text-white group-hover:text-amber-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                                    AI & Machine Learning
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {aiAndMachineLearningSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <h2 className="text-3xl pt-10 font-bold mb-6 text-center text-transparent bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text">
                            My Experience
                        </h2>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    iconStyle={{ background: '#3b82f6', color: '#fff' }}
                                    icon={<Briefcase className="h-6 w-6" />}
                                >
                                    <h3 className="vertical-timeline-element-title font-bold text-lg text-slate-100">
                                        Linux Systems Administrator
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle font-bold text-md text-slate-300">
                                        SAIC
                                    </h5>
                                    <p className="text-sm vertical-timeline-element-description text-slate-400">
                                        Engineered and maintained a diverse suite of mission-critical applications utilized
                                        by the U.S. Navy. Focused on enhancing system reliability, fortifying security protocols, 
                                        and optimizing performance to support operational excellence.
                                    </p>
                                    <span className="date vertical-timeline-element-date text-md mx-3 text-slate-300">
                                        2024 - 2025
                                    </span>
                                </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    iconStyle={{ background: '#3b82f6', color: '#fff' }}
                                    icon={<Briefcase className="h-6 w-6" />}
                                >
                                    <h3 className="vertical-timeline-element-title font-bold text-lg text-slate-100">
                                        Full-Stack Software Engineer
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle font-bold text-md text-slate-300">
                                        Express Health Systems
                                    </h5>
                                    <p className="text-sm vertical-timeline-element-description text-slate-400">
                                        Designed and developed web applications that streamline healthcare processes. 
                                        My responsibilities included front-end development using 
                                        React and back-end development with Node.js. 
                                        I have successfully led projects that improved user experience and 
                                        increased system efficiency.
                                    </p>
                                    <span className="date vertical-timeline-element-date text-md mx-3 text-slate-300">
                                        2018 - 2024
                                    </span>
                                </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    iconStyle={{ background: '#3b82f6', color: '#fff' }}
                                    icon={<GraduationCap className="h-6 w-6" />}
                                >
                                    <h3 className="vertical-timeline-element-title font-bold text-lg text-slate-100">
                                        High School Student
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle font-bold text-md text-slate-300">
                                        Union High School
                                    </h5>
                                    <p className="text-sm vertical-timeline-element-description text-slate-400">
                                        Graduated in 2017, earning a High School Diploma.
                                    </p>
                                    <span className="date vertical-timeline-element-date text-md mx-3 text-slate-300">
                                        2013 - 2017
                                    </span>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}