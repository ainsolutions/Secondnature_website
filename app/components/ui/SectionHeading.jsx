import FadeInView from "./FadeInView";
import ParallaxImage from "./ParallaxImage";

const SectionHeading = ({ heading, desc, bgImage, height }) => {
    return (
        <ParallaxImage height={height || 'auto'} image={bgImage}>
            <div className="max-w-7xl mx-auto text-center">
                <FadeInView>
                    <h2 className="text-5xl sm:text-7xl md:text-7xl  font-bold tracking-tight text-[var(--color-primary)]">{heading}</h2>
                    <p className="text-lg text-[var(--color-text)] max-w-3xl mx-auto">
                        {desc}
                    </p>
                </FadeInView>
            </div>
        </ParallaxImage>

    )
}

export default SectionHeading;