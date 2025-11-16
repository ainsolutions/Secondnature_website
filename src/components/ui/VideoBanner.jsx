import { useEffect, useState } from "react";

const VideoBanner = ({ videopath }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * 2); // adjust 0.4 → smaller = slower parallax
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-out"
                src={videopath}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    transform: `translateY(${offset * 0.4}px) scale(1.05)`,
                }}
            />

            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[var(--color-bg)]/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <p className="mt-4 text-lg md:text-xl text-[--color-bg] animate-fadeIn delay-200">
                    Fresh & Natural
                </p>

                <h1 className="text-5xl md:text-6xl font-bold text-[--color-bg] drop-shadow-lg animate-fadeIn">
                    Second Nature Oils
                </h1>
                <p className="mt-4 text-lg md:text-xl text-[--color-bg] animate-fadeIn delay-200">
                    Be Friendly
                </p>

                <a href="#about">
                    <button
                        className="mt-8 px-8 py-3 bg-[var(--color-primary)] text-[--color-bg] rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition duration-300 animate-fadeIn delay-500">
                        Explore More
                    </button>
                </a>
            </div>
        </section>
    );
};

export default VideoBanner;
