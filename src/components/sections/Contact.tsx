import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.TEMPLATE_ID, e.currentTarget, import.meta.env.PUBLIC_KEY)
        .then(() => {
            alert("Message sent!")
            setFormData({ name: "", email: "", message: "" })
        })
        .catch(() => {
            alert("Something went wrong. Please try again.")
        }
    )}

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text">
                        Get in Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text" 
                                id="name" 
                                name="name" 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                required
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message" 
                                name="message" 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                required
                                rows={5}
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}