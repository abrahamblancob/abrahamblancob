// Profile data - Single source of truth for all personal information

const profileDataES = {
    name: "Abraham Blanco",
    logo: "Abraham Blanco",
    title: "Liderazgo Tecnológico & Transformación Digital",
    subtitle: "Más de 10 años combinando visión de negocio con arquitectura de software avanzada. Especialista en Cloud, FinTech y Escalabilidad.",

    about: {
        summary: "Profesional con capacidad comprobada para dirigir equipos interdisciplinarios, optimizar operaciones TI y crear productos digitales escalables. Combino visión técnica con enfoque de negocio para impulsar la transformación digital en organizaciones de alto crecimiento."
    },

    experience: [
        {
            id: 1,
            title: "Gerente General",
            company: "Instituto Tecnológico Sitio Uno",
            period: "2025",
            description: "Fundación del instituto y estrategia de marketing digital.",
            achievements: [
                "Fundación y lanzamiento exitoso del instituto tecnológico",
                "Desarrollo e implementación de estrategia de marketing digital integral",
                "Establecimiento de alianzas estratégicas con empresas del sector"
            ]
        },
        {
            id: 2,
            title: "CTO (Chief Technology Officer)",
            company: "Sitio Uno Inc",
            period: "2022 - 2024",
            description: "Reducción del 25% en costos operativos TI y reingeniería de microservicios.",
            achievements: [
                "Reducción del 25% en costos operativos de infraestructura TI (GCP/Firebase)",
                "Reingeniería completa de arquitectura de microservicios",
                "Implementación de CI/CD y mejora en tiempo de deployment en 60%",
                "Diseño de arquitectura cloud para desarrollo de múltiples aplicaciones móviles para mercados internacionales en markets de Android y iOS"
            ]
        },
        {
            id: 3,
            title: "Senior Developer",
            company: "Sitio Uno Inc",
            period: "2018 - 2022",
            description: "Arquitectura financiera para Credicard con alta disponibilidad.",
            achievements: [
                "Diseño e implementación de arquitectura financiera para Credicard",
                "Garantía de alta disponibilidad (99.9% uptime)",
                "Cumplimiento de estándares PCI-DSS e ISO8583",
                "Desarrollo de aplicaciones financieras en Android para Credicard"
            ]
        },
        {
            id: 4,
            title: "Junior Developer",
            company: "Sitio Uno Inc",
            period: "2015 - 2018",
            description: "Desarrollo de aplicaciones financieras para puntos de venta en entes transaccionales Credicard y Banesco.",
            achievements: [
                "Desarrollo de aplicaciones para puntos de venta (POS)",
                "Integración con sistemas transaccionales de Credicard y Banesco",
                "Implementación de protocolos de seguridad financiera (KMM, UKMM)",
                "Procesos de certificación protocolos EMV y FIME contact y contactless"
            ]
        }
    ],

    techStack: {
        infrastructure: [
            { name: "Google Cloud Platform", icon: "Cloud" },
            { name: "Firebase", icon: "Flame" },
        ],
        architecture: [
            { name: "Microservicios", icon: "Network" },
            { name: "CI/CD", icon: "GitBranch" },
            { name: "SaaS", icon: "Server" },
        ],
        fintech: [
            { name: "PCI Standards", icon: "ShieldCheck" },
            { name: "ISO8583", icon: "FileCode" },
            { name: "Medios de Pago", icon: "CreditCard" },
        ],
        languages: [
            { name: "Python", icon: "Code2" },
            { name: "Java", icon: "Coffee" },
            { name: "C", icon: "Terminal" },
        ]
    },

    projects: [
        {
            id: 1,
            title: "Wabyte",
            description: "Plataforma tecnológica enfocada en soluciones digitales innovadoras. Desarrollo integral de producto digital con arquitectura moderna y escalable.",
            url: "https://www.wabyte.net",
            image: "/wabyte-logo.png",
            tags: ["Plataforma Digital", "SaaS", "Cloud"],
            color: "from-blue-500 to-cyan-500"
        }
    ],

    contact: {
        email: "abrahamblancob@gmail.com",
        linkedin: "https://www.linkedin.com/in/abraham-blanco-791146b6/",
    }
};

const profileDataEN = {
    name: "Abraham Blanco",
    logo: "Abraham Blanco",
    title: "Technology Leadership & Digital Transformation",
    subtitle: "Over 10 years combining business vision with advanced software architecture. Specialist in Cloud, FinTech and Scalability.",

    about: {
        summary: "Professional with proven ability to lead cross-functional teams, optimize IT operations, and build scalable digital products. I combine technical vision with a business-focused approach to drive digital transformation in high-growth organizations."
    },

    experience: [
        {
            id: 1,
            title: "General Manager",
            company: "Instituto Tecnológico Sitio Uno",
            period: "2025",
            description: "Founded the institute and digital marketing strategy.",
            achievements: [
                "Successful foundation and launch of the technology institute",
                "Development and implementation of a comprehensive digital marketing strategy",
                "Establishment of strategic partnerships with industry companies"
            ]
        },
        {
            id: 2,
            title: "CTO (Chief Technology Officer)",
            company: "Sitio Uno Inc",
            period: "2022 - 2024",
            description: "25% reduction in IT operational costs and microservices reengineering.",
            achievements: [
                "25% reduction in IT infrastructure operational costs (GCP/Firebase)",
                "Complete reengineering of microservices architecture",
                "CI/CD implementation and 60% improvement in deployment time",
                "Cloud architecture design for multiple mobile applications for international markets on Android and iOS"
            ]
        },
        {
            id: 3,
            title: "Senior Developer",
            company: "Sitio Uno Inc",
            period: "2018 - 2022",
            description: "Financial architecture for Credicard with high availability.",
            achievements: [
                "Design and implementation of financial architecture for Credicard",
                "Guaranteed high availability (99.9% uptime)",
                "Compliance with PCI-DSS and ISO8583 standards",
                "Development of financial Android applications for Credicard"
            ]
        },
        {
            id: 4,
            title: "Junior Developer",
            company: "Sitio Uno Inc",
            period: "2015 - 2018",
            description: "Development of financial applications for point-of-sale terminals at Credicard and Banesco.",
            achievements: [
                "Development of point-of-sale (POS) applications",
                "Integration with Credicard and Banesco transaction systems",
                "Implementation of financial security protocols (KMM, UKMM)",
                "EMV and FIME contact and contactless protocol certification processes"
            ]
        }
    ],

    techStack: {
        infrastructure: [
            { name: "Google Cloud Platform", icon: "Cloud" },
            { name: "Firebase", icon: "Flame" },
        ],
        architecture: [
            { name: "Microservices", icon: "Network" },
            { name: "CI/CD", icon: "GitBranch" },
            { name: "SaaS", icon: "Server" },
        ],
        fintech: [
            { name: "PCI Standards", icon: "ShieldCheck" },
            { name: "ISO8583", icon: "FileCode" },
            { name: "Payment Methods", icon: "CreditCard" },
        ],
        languages: [
            { name: "Python", icon: "Code2" },
            { name: "Java", icon: "Coffee" },
            { name: "C", icon: "Terminal" },
        ]
    },

    projects: [
        {
            id: 1,
            title: "Wabyte",
            description: "Technology platform focused on innovative digital solutions. Full digital product development with modern and scalable architecture.",
            url: "https://www.wabyte.net",
            image: "/wabyte-logo.png",
            tags: ["Digital Platform", "SaaS", "Cloud"],
            color: "from-blue-500 to-cyan-500"
        }
    ],

    contact: {
        email: "abrahamblancob@gmail.com",
        linkedin: "https://www.linkedin.com/in/abraham-blanco-791146b6/",
    }
};

export const profileDataByLang = { es: profileDataES, en: profileDataEN };
export const profileData = profileDataES;
