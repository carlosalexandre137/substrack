import { IModalityOptionsConfig } from "@/shared/interfaces/IModality";

export const ModalityOptionsConfig: IModalityOptionsConfig = {
  quarterly: {
    text: "Trimestralmente",
    prefix: "3 anos",
  },
  annually: {
    text: "Anualmente",
    prefix: "1 ano",
  },
  monthly: {
    text: "Mensalmente",
    prefix: "1 mês",
  },
  weekly: {
    text: "Semanalmente",
    prefix: "1 semana",
  },
  daily: {
    text: "Diariamente",
    prefix: "1 dia",
  },
};
