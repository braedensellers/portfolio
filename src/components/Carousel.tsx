import { CarouselSlide } from './CarouselSlide'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export const Carousel = () => {
    return (
        <Swiper
            modules={[ Navigation, Pagination, A11y, EffectCoverflow ]}
            spaceBetween={5}
            slidesPerView={3}
            pagination={{ clickable: true, dynamicBullets: true }}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            grabCursor={true}
            navigation
            loop
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 2,
                slideShadows: false,
            }}
        >
            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Resume Builder"
                    description="A web app that lets users build clean, ATS-friendly résumés with customizable inputs and instant PDF preview and export."
                    skills={["React", "Node.js", "TypeScript", "Vite", "Tailwind CSS"]}
                    githubLink="https://github.com/braedensellers/resume-builder"
                    projectLink="https://resume-builder-beta-jade.vercel.app/"
                    image="/portfolio/assets/resume-builder.PNG"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Classic Minesweeper"
                    description="A clone of the classic Minesweeper game with modern polish using only vanilla HTML, JS, and CSS."
                    skills={["HTML5", "CSS3", "JavaScript"]}
                    githubLink="https://github.com/braedensellers/minesweeper"
                    projectLink="https://minesweeper-one-tan.vercel.app/"
                    image="/portfolio/assets/minesweeper_screen.PNG"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Multi-Step Form"
                    description="A full-stack, robust, and customizable multi-step form infrastructure with an easy-to-maintain CMS system and custom validation."
                    skills={["React", "Vite", "TypeScript", "MongoDB", "Material UI"]}
                    githubLink="#"
                    projectLink="#"
                    image="/portfolio/assets/multi_step_form.PNG"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Placeholder"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Finance Manager"
                    description="Finance and budget manager for users to track and manage their financial accounts all in one place."
                    skills={["Next.js", "React", "Plaid API", "Chart.js", "Tailwind CSS"]}
                    githubLink="#"
                    projectLink="#"
                    image="/portfolio/assets/finance_manager.PNG"
                />
            </SwiperSlide>
        </Swiper>
    )
}