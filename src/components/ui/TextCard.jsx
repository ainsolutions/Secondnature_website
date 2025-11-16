import FadeInView from './FadeInView';

const TextCard = ({ heading, text, className, icon }) => {
    const Icon = icon;

    return (
        <div className={`backdrop-blur-sm rounded-2xl p-4 transition-shadow animate-fadeIn justify-self-center ${className} text-center mb-4`}>
            <FadeInView>
                <div className="relative flex flex-col items-center">
                    {icon ? <div className="p-3 bg-gradient-to-br from-[--color-primary] to-[--color-accent] rounded-full shadow-lg mb-8">
                        <Icon className="w-8 h-8 text-[--color-bg]" />
                    </div> : null}
                    {/* <div className="absolute w-[3px] h-6 bg-gradient-to-b from-[--color-primary] to-[--color-accent] rounded-full top-full"></div> */}
                </div>
                {heading && <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] mb-3">{heading}</h2>}

                {text.split('~').map((t, i) => (

                    <p key={i}>{t}</p>
                ))}
            </FadeInView>
        </div>

    )
}

export default TextCard;