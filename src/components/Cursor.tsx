import { useEffect, useState } from "react"

export default function Cursor() {
    const [isMousePressed, setIsMousePressed] = useState(false)

    useEffect(() => {
        const handleMouseDown = () => setIsMousePressed(true)
        const handleMouseUp = () => setIsMousePressed(false)

        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)

        return () => {
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-[99] transition duration-300 lg:absolute">
            <div className={`cursor-dot ${!isMousePressed ? 'animate-pulse' : ''}`} data-cursor-dot></div>
            <div 
                className={`cursor-outline fixed top-0 left-0 transform transition-transform duration-200 
                    ${isMousePressed 
                        ? 'scale-90 -translate-x-1/20 -translate-y-1/20 ease-[cubic-bezier(0.34,1.56,0.64,1)]' 
                        : 'scale-100'
                    }
                `}
                data-cursor-outline
            ></div>
            <div className="cursor-glow" data-cursor-glow></div>
        </div>
    )
}