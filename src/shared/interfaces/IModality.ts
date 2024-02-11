interface IModalityOption {
  text: string;
  prefix: string;
}

export interface IModalityOptionsConfig {
  quarterly: IModalityOption;
  annually: IModalityOption;
  monthly: IModalityOption;
  weekly: IModalityOption;
  daily: IModalityOption;
}
