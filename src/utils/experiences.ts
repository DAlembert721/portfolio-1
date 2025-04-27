import { projectTypes } from "./constants";

export const experiences = {
  innovo: {
    organization: "Innovo",
    position: "Frontend Developer (Freelancer)",
    startDate: "Julio 2022",
    endDate: "Julio 2023",
    details:
      "Responsable de implementación de las intefaces de módulos de contabilización, seguimiento de pedidos. Asimismo, refactorización de módulos de inventario de productos.",
    projects: [
      {
        name: "4G Flota TMS (ERP)",
        countries: "Perú y España",
        type: projectTypes.frontend,
        details:
          "Plataforma ERP para administración logística, contable y administración de recursos humanos.",
        technologies: ["React", "CRA", "AWS"],
        achievements: [
          "Adaptación de componentes preexistentes",
          "Diseño de arquitectura de seguridad integrando Cognito y permisos del sistema",
        ],
        membersQuantity: 4,
      },
    ],
  },
  cineplanet: {
    organization: "Cineplanet",
    position: "FullStack Developer",
    startDate: "Julio 2023",
    endDate: "Abril 2025",
    details: "",
    projects: [
      {
        name: "Web E-Commerce",
        countries: "Perú y Chile",
        type: projectTypes.frontend,
        details:
          "Web del E-Commerce para la venta de entradas y productos de dulcería. Además, permite el manejo de cuentas del programa de lealtad del cine. Asimismo, ofrece una plataforma para registro de consultas, quejas y solicitudes de ventas corporativas.",
        technologies: ["React", "Webpack", "Azure DevOps", "Firebase"],
        achievements: [
          "Disminución de impredictibilidad de comportamiento componentes",
          "Integración con billeteras digitales de cada país",
          "Actualización de webpack para integración con nuevas dependencias",
          "Reducción de vulnerabilidades de seguridad",
        ],
        membersQuantity: 4,
      },
      {
        name: "Kioskos",
        type: projectTypes.frontend,
        countries: "Perú y Chile",
        details:
          "Módulos de autoservicio para la venta de entradas y productos de dulcería. Asicomo, registro de nuevos usuarios al programa de lealtad.",
        technologies: ["React", "Webpack", "Azure DevOps", "Firebase"],
        achievements: [
          "Integración de canal de pago POS (Chile)",
          "Implementación integrado al sistema eliminando el uso de extensiones",
          "Actualización de webpack para integración con nuevas dependencias",
        ],
        membersQuantity: 3,
      },
      {
        name: "Microservicios para canales de venta",
        type: projectTypes.backend,
        countries: "Perú y Chile",
        details:
          "Servicios para los canales de venta del E-Commerce y los módulos de autoservicio de los cines.",
        technologies: [
          "SpringBoot",
          "TypeScript",
          "Golang",
          "Azure Functions",
          "Google Cloud Functions",
          "Azure DevOps",
          "Firebase",
        ],
        achievements: [
          "Resolución de observaciones de seguridad",
          "Mejora en tiempo de respuesta de servicios",
          "Seguimiento de datos para resolución de conflictos de pago y otros",
          "Mejora de disponibilidad de los canales de venta en preventas",
        ],
        membersQuantity: 2,
      },
      {
        name: "Sistema de Administración de Servicios Internos",
        type: projectTypes.frontend,
        countries: "Perú y Chile",
        details:
          "Aplicación web para manejo, automatización y mejoramiento de procesos internos de la empresa",
        technologies: ["React", "Vite", "Azure DevOps", "Firebase"],
        achievements: [
          "Agilización de configuraciones para canales de venta y eventos",
          "Automatización para generación masiva de vouchers, registro de usuarios y dispositivos",
          "Mejora en seguimiento de objetos de sistemas como el blog y plataforma de FAQ",
        ],
        membersQuantity: 2,
      },
      {
        name: "Sistema de Administración de Servicios Internos",
        type: projectTypes.backend,
        countries: "Perú y Chile",
        details:
          "Servicios para el sistema para manejo, automatización y mejoramiento de procesos internos de la empresa.",
        technologies: ["NestJs", "Azure DevOps", "Firebase"],
        achievements: [
          "Automatización de generación de vouchers para clientes corporativos con Puppeteer",
          "Automatización de asignación de vouchers corporativos a clientes mediante colas",
          "Registro de auditoría de modifiación de objetos del sistema",
        ],
        membersQuantity: 2,
      },
      {
        name: "Servicios para Blog",
        type: projectTypes.backend,
        countries: "Perú",
        details:
          "Servicios para plataforma de divulgación del rubro cinematográfico y entretenimiento en general. Asimismo, promoción de sorteos de artículos relacionados al cine en general.",
        technologies: ["NestJs", "Azure DevOps"],
        achievements: [
          "Tiempos de respuesta cortos en servicios de alta demanda",
          "Registro de estadísticas de comportamiento de usuario",
        ],
        membersQuantity: 2,
      },
      {
        name: "Venta de dulcería en sala",
        type: projectTypes.backend,
        countries: "Perú",
        details:
          "Sistema para venta de productos de dulcería dentro de las salas de proyección durante las funciones usando dispositivos POS en dispositivos móbiles",
        technologies: ["NestJs", "Azure DevOps"],
        achievements: [
          "Tiempos de respuesta cortos en servicios de alta demanda",
          "Seguimiento de ventas y cajas de trabajadores en jornada laboral",
          "Seguimiento de fallas durante el proceso de venta",
        ],
        membersQuantity: 2,
      },
    ],
  },
  flota: {
    organization: "4G Flota",
    position: "Frontend Developer (Freelancer)",
    startDate: "Julio 2023",
    endDate: "Actualidad",
    details: "",
    projects: [
      {
        name: "TMS (ERP)",
        countries: "Perú y España",
        details:
          "Plataforma ERP para administración logística, contable y administración de recursos humanos.",
        technologies: ["React", "RsPack", "AWS"],
        achievements: [
          "Mejora de tiempo de renderización de componentes",
          "Mejora en tiempo de despliegue usando RsPack",
          "Mejora de manejo de redux",
        ],
        membersQuantity: 3,
      },
      {
        name: "TMS Modules (ERP)",
        countries: "Perú y España",
        details:
          "Plataforma ERP para uso en sistemas externos permitiendo su uso como iframe",
        technologies: ["React", "Vite", "AWS"],
        achievements: [
          "Diseño e implementación de módulos para multimapas, manejo de pasajeros y destinos, y ",
          "Mejora de renderización de componentes usando virtualización",
          "Mejora de rendimiento redefiniendo llamada a servicios",
        ],
        membersQuantity: 3,
      },
    ],
  },
};
