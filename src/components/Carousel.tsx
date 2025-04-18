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
                    title="Placeholder 1"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Placeholder 2"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Placeholder 3"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Placeholder 4"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>

            <SwiperSlide className="rounded-xl bg-slate-900 border-white/10 border hover:border-amber-300 transition-all duration-300 group">
                <CarouselSlide 
                    title="Placeholder 5"
                    description="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet."
                    skills={["React", "Node.js", "Typescript", "MongoDB"]}
                    githubLink="#"
                    projectLink="#"
                    image="https://web-assets.domo.com/blog/wp-content/uploads/2022/05/dashboardDesign.png"
                />
            </SwiperSlide>
        </Swiper>
    )
}