// Profile data - Single source of truth for all personal information
export const profileData = {
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
            period: "2024 - Presente",
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
            period: "2021 - 2024",
            description: "Reducción del 25% en costos operativos TI y reingeniería de microservicios.",
            achievements: [
                "Reducción del 25% en costos operativos de infraestructura TI (GCP/Firebase)",
                "Reingeniería completa de arquitectura de microservicios",
                "Implementación de CI/CD y mejora en tiempo de deployment en 60%"
            ]
        },
        {
            id: 3,
            title: "Senior Developer",
            company: "Sitio Uno Inc",
            period: "2018 - 2021",
            description: "Arquitectura financiera para Credicard con alta disponibilidad.",
            achievements: [
                "Diseño e implementación de arquitectura financiera para Credicard",
                "Garantía de alta disponibilidad (99.9% uptime)",
                "Cumplimiento de estándares PCI-DSS e ISO8583"
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

    contact: {
        email: "abrahamblancob@gmail.com",
        linkedin: "https://www.linkedin.com/in/abraham-blanco-791146b6/",
    }
};
