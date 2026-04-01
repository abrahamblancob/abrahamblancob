/**
 * Blog posts data - bilingual (ES/EN)
 */

const blogPostsES = [
    {
        id: "idempotencia-apis-financieras-uuids-emv",
        title: "Idempotencia en APIs financieras: de los UUIDs al chip EMV",
        excerpt: "Ciclo de vida de la idempotency key, los cuatro escenarios que debes cubrir, el orden de persistencia que más falla en producción y cómo el protocolo EMV resuelve el mismo problema en medios físicos.",
        date: "2026-03-31",
        author: "Abraham Blanco",
        tags: ["FinTech", "APIs", "EMV", "Idempotencia", "Pagos"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7444896470819946496",
        color: "from-emerald-500 to-teal-500",
        content: [
            {
                type: "paragraph",
                text: "La idempotencia es uno de los conceptos más críticos en sistemas de pago y, al mismo tiempo, uno de los que más se implementa mal en producción. Un cobro duplicado no es solo un bug — es un incidente con impacto real en el usuario y en el negocio."
            },
            {
                type: "image",
                src: "/blog/idempotencia-apis-financieras.jpg",
                alt: "Idempotencia en APIs financieras: de los UUIDs al chip EMV",
                caption: "Ciclo de vida de la idempotency key · cuatro escenarios · orden de persistencia · protocolo EMV"
            },
            {
                type: "heading",
                text: "El ciclo de vida de la idempotency key"
            },
            {
                type: "paragraph",
                text: "El flujo es simple en teoría: el cliente genera un UUID v4, lo envía como header Idempotency-Key, el API Gateway lo extrae y consulta un Idempotency Store (Redis o DB) con TTL de 24 horas. Pero la complejidad está en los casos borde."
            },
            {
                type: "heading",
                text: "Los cuatro escenarios que debes cubrir"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "🟢",
                        title: "Key nueva:",
                        text: "persiste PENDING antes de cualquier efecto externo, luego ejecuta el cobro."
                    },
                    {
                        icon: "🟡",
                        title: "En proceso — retry concurrente:",
                        text: "la key está bloqueada, responde 409 Conflict. El cliente no debe reintentar hasta recibir respuesta."
                    },
                    {
                        icon: "🔵",
                        title: "Completada — retry tardío:",
                        text: "la operación ya existe en el store, devuelve la respuesta cacheada sin re-ejecutar."
                    },
                    {
                        icon: "🔴",
                        title: "TTL expirado:",
                        text: "la key no existe en el store, la operación es considerada nueva y se procesa desde cero."
                    }
                ]
            },
            {
                type: "heading",
                text: "El orden de persistencia: el detalle que más falla en producción"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "1️⃣",
                        title: "Persiste PENDING",
                        text: "antes de cualquier efecto externo. Este paso es el seguro contra duplicados."
                    },
                    {
                        icon: "2️⃣",
                        title: "Ejecuta el cobro",
                        text: "idempotente contra el procesador de pagos."
                    },
                    {
                        icon: "3️⃣",
                        title: "Actualiza resultado",
                        text: "estado DONE + respuesta serializada."
                    }
                ]
            },
            {
                type: "paragraph",
                text: "Si el proceso muere entre el paso 2 y el 3, el retry encuentra PENDING y no reejecuta — el estado intermedio te protege. Invertir el orden duplica cobros."
            },
            {
                type: "heading",
                text: "Cómo resuelve EMV la idempotencia en medios físicos"
            },
            {
                type: "paragraph",
                text: "El chip no usa UUIDs — usa criptografía de sesión. Cada transacción genera una firma única e irrepetible entre tarjeta, terminal y emisor mediante tres elementos: ATC (Application Transaction Counter, contador en chip que nunca retrocede), ARQC (Authorization Request Cryptogram, firma única f(ATC, UN, monto, clave)) y UN (Unpredictable Number, nonce del terminal de 4 bytes para anti-replay)."
            },
            {
                type: "paragraph",
                text: "El emisor valida el ARQC con la clave maestra derivada y verifica que el ATC no haya sido usado antes. Un ARQC repetido con el mismo ATC es un intento de replay — hay que rechazarlo en el gateway, antes de llegar al autorizador."
            },
            {
                type: "heading",
                text: "Dos capas de idempotencia que deben coexistir"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "🔗",
                        title: "APIs REST:",
                        text: "idempotency key generada por el cliente, persistida en Redis / DB antes del efecto, TTL 24h con scope por user_id."
                    },
                    {
                        icon: "💳",
                        title: "Protocolo EMV:",
                        text: "ARQC único por transacción física, ATC como contador irrepetible en chip, validación en HSM del emisor."
                    }
                ]
            },
            {
                type: "paragraph",
                text: "¿Tu gateway valida el ATC antes de llegar al autorizador? ¿O delegan esa responsabilidad completamente al procesador?"
            }
        ]
    },
    {
        id: "pci-dss-arquitecturas-cloud-native",
        title: "PCI-DSS en Arquitecturas Cloud-Native: El gap entre teoría y producción",
        excerpt: "Cumplir con PCI-DSS en microservicios distribuidos sobre Kubernetes es complejo si no tienes claro cómo se traducen los requerimientos a decisiones de diseño concretas.",
        date: "2025-03-13",
        author: "Abraham Blanco",
        tags: ["PCI-DSS", "Cloud-Native", "Kubernetes", "FinTech", "Seguridad"],
        linkedinUrl: "https://www.linkedin.com/posts/abraham-blanco-791146b6_pci-dss-en-arquitecturas-cloud-native-el-activity-7438055484634554369-VFjK",
        color: "from-red-500 to-orange-500",
        content: [
            {
                type: "paragraph",
                text: "Cumplir con PCI-DSS en un monolito es difícil. En microservicios distribuidos sobre Kubernetes es aún más complejo... si no tienes claro cómo se traducen los requerimientos a decisiones de diseño concretas."
            },
            {
                type: "paragraph",
                text: "Después de trabajar en sistemas de pago durante más de una década, diseñé este diagrama de referencia que conecta los controles de PCI-DSS con una arquitectura Cloud-Native real."
            },
            {
                type: "image",
                src: "/blog/pci-dss-cloud-native.jpg",
                alt: "Diagrama de arquitectura PCI-DSS en Cloud-Native",
                caption: "Arquitectura de referencia: segmentación de red, tokenización, audit trail y acceso privilegiado"
            },
            {
                type: "heading",
                text: "Los 3 errores más comunes en producción"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "❌",
                        title: "Segmentación de red mal entendida:",
                        text: "Poner todos los microservicios en la misma VPC y asumir que los NetworkPolicies de K8s son suficientes. El CDE (Cardholder Data Environment) debe estar aislado a nivel de red, no solo de aplicación."
                    },
                    {
                        icon: "❌",
                        title: "Tokenización delegada al último momento:",
                        text: "El PAN (Primary Account Number) nunca debería llegar a los servicios de negocio. La tokenización debe ocurrir en el borde, antes de cualquier lógica."
                    },
                    {
                        icon: "❌",
                        title: "Audit trail incompleto:",
                        text: "PCI-DSS exige log de toda acción sobre datos de tarjeta. Con microservicios asíncronos y Kafka de por medio, armar esa trazabilidad end-to-end requiere diseño explícito, no \"ya lo vemos después\"."
                    }
                ]
            },
            {
                type: "heading",
                text: "Lo que el diagrama integra"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "✅",
                        title: "Segmentación de red:",
                        text: "zona pública, DMZ y CDE con políticas estrictas"
                    },
                    {
                        icon: "✅",
                        title: "Vault de secretos",
                        text: "y tokenización en el API Gateway"
                    },
                    {
                        icon: "✅",
                        title: "Flujo del PAN",
                        text: "desde la entrada hasta el procesador, con puntos de tokenización explícitos"
                    },
                    {
                        icon: "✅",
                        title: "Audit log centralizado",
                        text: "con inmutabilidad garantizada"
                    },
                    {
                        icon: "✅",
                        title: "Acceso privilegiado",
                        text: "con MFA y registro de sesiones"
                    }
                ]
            },
            {
                type: "paragraph",
                text: "Si tuvieras que eliminar un componente de este diagrama por restricciones de presupuesto o tiempo, ¿cuál sería el primero que sacrificarías... y cuál jamás tocarías?"
            }
        ]
    },
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
        id: "idempotency-financial-apis-uuids-emv",
        title: "Idempotency in Financial APIs: from UUIDs to the EMV chip",
        excerpt: "Idempotency key lifecycle, the four scenarios you must cover, the persistence order that most often fails in production, and how the EMV protocol solves the same problem for physical payment methods.",
        date: "2026-03-31",
        author: "Abraham Blanco",
        tags: ["FinTech", "APIs", "EMV", "Idempotency", "Payments"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7444896470819946496",
        color: "from-emerald-500 to-teal-500",
        content: [
            {
                type: "paragraph",
                text: "Idempotency is one of the most critical concepts in payment systems and, at the same time, one of the most commonly misimplemented in production. A duplicate charge is not just a bug — it's an incident with real impact on users and the business."
            },
            {
                type: "image",
                src: "/blog/idempotencia-apis-financieras.jpg",
                alt: "Idempotency in Financial APIs: from UUIDs to the EMV chip",
                caption: "Idempotency key lifecycle · four scenarios · persistence order · EMV protocol"
            },
            {
                type: "heading",
                text: "The idempotency key lifecycle"
            },
            {
                type: "paragraph",
                text: "The flow is simple in theory: the client generates a UUID v4, sends it as an Idempotency-Key header, the API Gateway extracts it and queries an Idempotency Store (Redis or DB) with a 24-hour TTL. But the complexity lies in the edge cases."
            },
            {
                type: "heading",
                text: "The four scenarios you must cover"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "🟢",
                        title: "New key:",
                        text: "persist PENDING before any external effect, then execute the charge."
                    },
                    {
                        icon: "🟡",
                        title: "In progress — concurrent retry:",
                        text: "the key is locked, respond 409 Conflict. The client must not retry until a response is received."
                    },
                    {
                        icon: "🔵",
                        title: "Completed — late retry:",
                        text: "the operation already exists in the store, return the cached response without re-executing."
                    },
                    {
                        icon: "🔴",
                        title: "TTL expired:",
                        text: "the key doesn't exist in the store, the operation is treated as new and processed from scratch."
                    }
                ]
            },
            {
                type: "heading",
                text: "Persistence order: the detail that fails most in production"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "1️⃣",
                        title: "Persist PENDING",
                        text: "before any external effect. This step is the insurance against duplicates."
                    },
                    {
                        icon: "2️⃣",
                        title: "Execute the charge",
                        text: "idempotent against the payment processor."
                    },
                    {
                        icon: "3️⃣",
                        title: "Update result",
                        text: "DONE state + serialized response."
                    }
                ]
            },
            {
                type: "paragraph",
                text: "If the process dies between steps 2 and 3, the retry finds PENDING and won't re-execute — the intermediate state protects you. Reversing the order duplicates charges."
            },
            {
                type: "heading",
                text: "How EMV solves idempotency for physical payment methods"
            },
            {
                type: "paragraph",
                text: "The chip doesn't use UUIDs — it uses session cryptography. Each transaction generates a unique, non-repeatable signature between card, terminal, and issuer through three elements: ATC (Application Transaction Counter, an on-chip counter that never decrements), ARQC (Authorization Request Cryptogram, unique signature f(ATC, UN, amount, key)), and UN (Unpredictable Number, a 4-byte terminal nonce for anti-replay)."
            },
            {
                type: "paragraph",
                text: "The issuer validates the ARQC with the derived master key and verifies that the ATC hasn't been used before. A repeated ARQC with the same ATC is a replay attempt — it must be rejected at the gateway, before reaching the authorizer."
            },
            {
                type: "heading",
                text: "Two idempotency layers that must coexist"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "🔗",
                        title: "REST APIs:",
                        text: "idempotency key generated by the client, persisted in Redis / DB before the effect, 24h TTL scoped by user_id."
                    },
                    {
                        icon: "💳",
                        title: "EMV Protocol:",
                        text: "unique ARQC per physical transaction, ATC as an on-chip non-repeatable counter, validation in the issuer's HSM."
                    }
                ]
            },
            {
                type: "paragraph",
                text: "Does your gateway validate the ATC before reaching the authorizer? Or do you fully delegate that responsibility to the processor?"
            }
        ]
    },
    {
        id: "pci-dss-cloud-native-architectures",
        title: "PCI-DSS in Cloud-Native Architectures: The gap between theory and production",
        excerpt: "Achieving PCI-DSS compliance in distributed microservices on Kubernetes is complex if you don't know how to translate requirements into concrete design decisions.",
        date: "2025-03-13",
        author: "Abraham Blanco",
        tags: ["PCI-DSS", "Cloud-Native", "Kubernetes", "FinTech", "Security"],
        linkedinUrl: "https://www.linkedin.com/posts/abraham-blanco-791146b6_pci-dss-en-arquitecturas-cloud-native-el-activity-7438055484634554369-VFjK",
        color: "from-red-500 to-orange-500",
        content: [
            {
                type: "paragraph",
                text: "Achieving PCI-DSS compliance in a monolith is hard. In distributed microservices on Kubernetes it's even more complex... if you don't know how to translate requirements into concrete design decisions."
            },
            {
                type: "paragraph",
                text: "After working in payment systems for over a decade, I designed this reference diagram that connects PCI-DSS controls with a real Cloud-Native architecture."
            },
            {
                type: "image",
                src: "/blog/pci-dss-cloud-native.jpg",
                alt: "PCI-DSS Cloud-Native Architecture Diagram",
                caption: "Reference architecture: network segmentation, tokenization, audit trail and privileged access"
            },
            {
                type: "heading",
                text: "The 3 most common mistakes in production"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "❌",
                        title: "Misunderstood network segmentation:",
                        text: "Putting all microservices in the same VPC and assuming K8s NetworkPolicies are enough. The CDE (Cardholder Data Environment) must be isolated at the network level, not just the application level."
                    },
                    {
                        icon: "❌",
                        title: "Tokenization deferred to the last moment:",
                        text: "The PAN (Primary Account Number) should never reach business services. Tokenization must happen at the edge, before any business logic."
                    },
                    {
                        icon: "❌",
                        title: "Incomplete audit trail:",
                        text: "PCI-DSS requires logging every action on card data. With asynchronous microservices and Kafka in between, building end-to-end traceability requires explicit design, not \"we'll deal with it later\"."
                    }
                ]
            },
            {
                type: "heading",
                text: "What the diagram integrates"
            },
            {
                type: "list",
                items: [
                    {
                        icon: "✅",
                        title: "Network segmentation:",
                        text: "public zone, DMZ and CDE with strict policies"
                    },
                    {
                        icon: "✅",
                        title: "Secrets vault",
                        text: "and tokenization at the API Gateway"
                    },
                    {
                        icon: "✅",
                        title: "PAN flow",
                        text: "from entry to processor, with explicit tokenization points"
                    },
                    {
                        icon: "✅",
                        title: "Centralized audit log",
                        text: "with guaranteed immutability"
                    },
                    {
                        icon: "✅",
                        title: "Privileged access",
                        text: "with MFA and session recording"
                    }
                ]
            },
            {
                type: "paragraph",
                text: "If you had to remove one component from this diagram due to budget or time constraints, which would be the first you'd sacrifice... and which would you never touch?"
            }
        ]
    },
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
