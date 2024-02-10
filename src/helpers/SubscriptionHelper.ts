import { ModalityOptionsConfig } from "../config/Subscription";
import { ISubscription } from "../shared/interfaces/ISubscription";
import { FormatPrice } from "../utils/Price";

class SubscriptionHelper {
  constructor(private subscription: ISubscription) {
  }

  get id(): string {
    return String(this.subscription.id);
  }

  get name(): string {
    return this.subscription.name;
  }

  get link(): string {
    return this.subscription.link;
  }

  get plan(): string {
    return this.subscription.plan;
  }

  get price(): string {
    return FormatPrice(this.subscription.price);
  }

  get date(): string {
    const date = new Date(this.subscription.date);
    
    return String(date.getDate());
  }

  get modality(): string {
    const modality = this.subscription.modality
    return ModalityOptionsConfig[modality].text;
  }
}

export default SubscriptionHelper