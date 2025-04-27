import { organizations, organizationsKeys } from "./constants";

export const experiences = {
  [organizationsKeys.innovo]: {
    organization: [organizations[organizationsKeys.innovo].name],
    position: "Frontend Developer (Freelancer)",
    startDate: "Julio 2022",
    endDate: "Julio 2023",
    details:
      "Responsable de implementación de las intefaces de módulos de contabilización, seguimiento de pedidos. Asimismo, refactorización de módulos de inventario de productos.",
  },
  [organizationsKeys.cineplanet]: {
    organization: [organizations[organizationsKeys.cineplanet].name],
    position: "FullStack Developer",
    startDate: "Julio 2023",
    endDate: "Abril 2025",
    details: "",
  },
  [organizationsKeys.flota]: {
    organization: [organizations[organizationsKeys.flota].name],
    position: "Frontend Developer (Freelancer)",
    startDate: "Julio 2023",
    endDate: "Actualidad",
    details: "",
  },
};
