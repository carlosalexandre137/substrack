import { SubscriptionActionType } from "../../enum/Subscription";
import { IModalityOptionsConfig } from "./IModality";

export interface ISubscription {
  id?: number;
  name: string;
  link: string;
  plan: string;
  price: number;
  date: Date;
  modality: keyof IModalityOptionsConfig;
}

export interface ISubscriptionAction {
  type: SubscriptionActionType;
  payload: ISubscription;
}
