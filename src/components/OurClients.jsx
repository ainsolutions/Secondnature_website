import { useRef, useEffect, useState } from "react";
import Section from "./ui/Section";
import TextCard from "./ui/TextCard";

const logos = [
    "/src/assets/logos/Client1.png",
    "/src/assets/logos/Client2.png",
    "/src/assets/logos/Client3.png",
    "/src/assets/logos/Client4.png",
    "/src/assets/logos/Client5.png",
    "/src/assets/logos/Client6.png",
    "/src/assets/logos/Client7.png",
    "/src/assets/logos/Client8.png",
    "/src/assets/logos/Client9.png",
    "/src/assets/logos/Client10.png",
    "/src/assets/logos/Client11.png",
    "/src/assets/logos/Client12.png",
    "/src/assets/logos/Client13.png",
    "/src/assets/logos/Client14.png",
    "/src/assets/logos/Client15.png",
    "/src/assets/logos/Client16.png",
];

export default function OurClients() {
    const marqueeRef = useRef(null);
    const [duration, setDuration] = useState(20); // seconds

    useEffect(() => {
        const el = marqueeRef.current;
        if (el) {
            const totalWidth = el.scrollWidth / 2; // half (since we duplicate)
            const speed = totalWidth / 100; // pixels per second
            setDuration(totalWidth / speed / 10); // tweak divisor to tune speed
        }
    }, []);

    return (
        <Section>
            <div className="relative overflow-hidden py-12 bg-[radial-gradient(circle_at_top_left,var(--color-primary)_0%,var(--color-text)_90%,var(--color-text)_100%)]">
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-[--color-bg]">
                    Our Clients
                </h2>

                <TextCard className="text-[--color-bg]" text="At first, Second Nature Oils was available solely through distributors. Our products are now stocked in various Irish health food retailers, Organic Shops and distributors.
                ~Apart from the local Irish market, the oil has proven to be popular in the UAE (Spinneys & Waitrose), Japan (Shumei International) and Singapore as well, with the founder having supplied oil to these markets in previous years
            ~Our oil is stocked in more popular Supermarkets (such as SuperValu), Retail outlets, Health & Organic Stores and high-end hotels such as the Marker Hotel in Dublin, BrookLodge hotel in Co. Wicklow, and Adare Manor in Co. Limerick. Our company is aiming to expand into the entire G.C.C. area, as well as the UK and EU." />


                {/* Outer container */}
                <div className="relative overflow-hidden">
                    {/* Marquee container */}
                    <div
                        ref={marqueeRef}
                        className="flex whitespace-nowrap w-max"
                        style={{
                            animation: `scrollFull ${duration}s linear infinite`,
                        }}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <div key={i} className="flex-shrink-0 mx-8">
                                <img
                                    src={logo}
                                    alt={`Client logo ${i + 1}`}
                                    className="h-14 w-auto object-contain transition duration-300 shadow-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="bg-cover flex"
                style={{
                    backgroundImage: `url(/src/assets/banner/Banner7.png)`,
                    width: '100%',
                    height: '400px',
                    backgroundPosition: 'center center'
                }}
            >
            </div>

        </Section>
    );
}
