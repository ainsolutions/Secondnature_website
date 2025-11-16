const Section = ({ id, children }) => {
    return (
        <section id={id} className={`relative pb-16 text-[--color-text]`}>
            {children}
        </section>
    )
}

export default Section;