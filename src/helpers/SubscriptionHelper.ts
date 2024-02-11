import { ModalityOptionsConfig } from "../config/Subscription";
import { ISubscription } from "../shared/interfaces/ISubscription";
import { FormatPrice } from "../utils/Price";
import SubscriptionDateHelper from "./SubscriptionDateHelper";

class SubscriptionHelper {
  private helper: SubscriptionDateHelper;

  constructor(private subscription: ISubscription) {
    this.helper = new SubscriptionDateHelper(
      this.subscription.date,
      this.subscription.modality
    );
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
    return this.helper.dateRenewal;
  }

  get renewal(): boolean {
    return this.helper.checkIfTheRenewalIsToday;
  }

  get modality(): string {
    const modality = this.subscription.modality;
    return ModalityOptionsConfig[modality].text;
  }
}

export default SubscriptionHelper;
