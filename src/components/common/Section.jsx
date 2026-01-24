/**
 * Section wrapper component
 * Provides consistent spacing and layout for page sections
 */
const Section = ({
    id,
    children,
    className = '',
    containerClassName = ''
}) => {
    return (
        <section
            id={id}
            className={`py-20 px-4 ${className}`}
        >
            <div className={`max-w-7xl mx-auto ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
