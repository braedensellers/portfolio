export const Marquee = ({ list }: { list: string[] }) => {
    return (
        <div className="overflow-hidden max-w-xl flex bg-blue-500/10 px-3 py-1 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <ul className="flex animate-marquee whitespace-nowrap">
                {[...list, ...list].map((title, index) => (
                    <li key={index} className="items-center font-bold whitespace-nowrap">
                        <p>
                            {title}
                            <span className="mx-4">•</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}