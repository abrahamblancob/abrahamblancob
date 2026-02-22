/**
 * Blog posts data - bilingual (ES/EN)
 */

const blogPostsES = [
    {
        id: "arquitectura-sistemas-financieros-ddd-eda-iso",
        title: "Arquitectura de Sistemas Financieros: Integrando DDD, EDA y Estándares ISO",
        excerpt: "Una arquitectura de referencia para sistemas de transferencias financieras internacionales que conecta conceptos teóricos con casos de uso robustos y prácticos.",
        date: "2025-01-15",
        author: "Abraham Blanco",
        tags: ["DDD", "EDA", "FinTech", "ISO 20022", "Kafka", "Arquitectura"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7429364251120533504/",
        color: "from-blue-500 to-cyan-500",
        content: [
            {
                type: "paragraph",
                text: "Diseñé esta arquitectura de referencia para sistemas de transferencias financieras internacionales como un ejercicio para conectar conceptos teóricos con casos de uso robustos y prácticos. El resultado es un diseño que integra cinco pilares fundamentales."
            },
            {
                type: "heading",
                text: "1. Seguridad y Gobernanza"
            },
            {
                type: "paragraph",
                text: "Autenticación con OAuth2 y cifrado mTLS para la comunicación interbancaria. En un sistema financiero, la seguridad no es negociable — cada punto de integración debe estar protegido con estándares de la industria."
            },
            {
                type: "heading",
                text: "2. DDD y Resiliencia"
            },
            {
                type: "paragraph",
                text: "Bounded Contexts y el patrón de orquestación Saga para manejar transacciones distribuidas complejas sin bloquear recursos. Domain-Driven Design nos permite modelar la complejidad del dominio financiero de forma que el software refleje las reglas de negocio reales."
            },
            {
                type: "heading",
                text: "3. EDA y Escalabilidad"
            },
            {
                type: "paragraph",
                text: "Kafka como backbone asíncrono, database sharding e idempotencia para manejar picos de alto tráfico. La arquitectura orientada a eventos permite desacoplar los servicios y escalar cada componente independientemente según la demanda."
            },
            {
                type: "heading",
                text: "4. Estándares e Integración"
            },
            {
                type: "paragraph",
                text: "Protocolo financiero ISO 20022 y Change Data Capture para compatibilidad con sistemas legacy. La adopción de estándares internacionales no solo facilita la interoperabilidad sino que posiciona al sistema para el futuro de las finanzas globales."
            },
            {
                type: "heading",
                text: "5. Observabilidad"
            },
            {
                type: "paragraph",
                text: "Trazabilidad distribuida de extremo a extremo. En sistemas distribuidos, la capacidad de rastrear una transacción a través de múltiples servicios es crítica para el debugging, auditoría y cumplimiento regulatorio."
            },
            {
                type: "paragraph",
                text: "Esta arquitectura no es solo un ejercicio teórico — refleja patrones probados en producción para manejar las complejidades reales de los sistemas de pagos internacionales."
            }
        ]
    }
];

const blogPostsEN = [
    {
        id: "financial-systems-architecture-ddd-eda-iso",
        title: "Financial Systems Architecture: Integrating DDD, EDA and ISO Standards",
        excerpt: "A reference architecture for international financial transfer systems that connects theoretical concepts with robust, practical use cases.",
        date: "2025-01-15",
        author: "Abraham Blanco",
        tags: ["DDD", "EDA", "FinTech", "ISO 20022", "Kafka", "Architecture"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7429364251120533504/",
        color: "from-blue-500 to-cyan-500",
        content: [
            {
                type: "paragraph",
                text: "I designed this reference architecture for international financial transfer systems as an exercise to connect theoretical concepts with robust, practical use cases. The result is a design that integrates five fundamental pillars."
            },
            {
                type: "heading",
                text: "1. Security & Governance"
            },
            {
                type: "paragraph",
                text: "OAuth2 authentication and mTLS encryption for inter-bank communication. In a financial system, security is non-negotiable — every integration point must be protected with industry standards."
            },
            {
                type: "heading",
                text: "2. DDD & Resilience"
            },
            {
                type: "paragraph",
                text: "Bounded Contexts and the Saga orchestration pattern for handling complex distributed transactions without blocking resources. Domain-Driven Design allows us to model the complexity of the financial domain so that software reflects real business rules."
            },
            {
                type: "heading",
                text: "3. EDA & Scalability"
            },
            {
                type: "paragraph",
                text: "Kafka as the asynchronous backbone, database sharding, and idempotency for handling high-traffic peaks. Event-driven architecture enables decoupling services and scaling each component independently based on demand."
            },
            {
                type: "heading",
                text: "4. Standards & Integration"
            },
            {
                type: "paragraph",
                text: "ISO 20022 financial protocol and Change Data Capture for legacy system compatibility. Adopting international standards not only facilitates interoperability but positions the system for the future of global finance."
            },
            {
                type: "heading",
                text: "5. Observability"
            },
            {
                type: "paragraph",
                text: "End-to-end distributed tracing. In distributed systems, the ability to trace a transaction across multiple services is critical for debugging, auditing, and regulatory compliance."
            },
            {
                type: "paragraph",
                text: "This architecture is not just a theoretical exercise — it reflects production-proven patterns for handling the real complexities of international payment systems."
            }
        ]
    }
];

export const blogPostsByLang = {
    es: blogPostsES,
    en: blogPostsEN
};

/**
 * Get a blog post by its slug in the given language
 */
export function getBlogPostBySlug(slug, language) {
    const posts = blogPostsByLang[language] || blogPostsByLang.es;
    return posts.find(p => p.id === slug);
}

/**
 * Get all slugs for both languages (used for routing)
 */
export const allBlogSlugs = [
    ...blogPostsES.map(p => p.id),
    ...blogPostsEN.map(p => p.id)
];
