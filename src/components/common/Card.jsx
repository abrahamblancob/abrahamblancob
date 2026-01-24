/**
 * Glassmorphism Card component
 * Follows Single Responsibility - handles card styling only
 */
const Card = ({
    children,
    className = '',
    hover = true,
    ...props
}) => {
    const hoverClass = hover ? 'glass-hover' : '';

    return (
        <div
            className={`glass rounded-xl p-6 ${hoverClass} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
