import { modelSubscriptionList } from "../../Config/Subscription";
import SubscriptionDate from "../../Helper/SubscriptionDate";

export default class Subscription {
  constructor(subscription) {
    this.subscription = subscription;
  }

  id() {
    return this.subscription.id;
  }

  name() {
    return this.subscription.nameSubscription;
  }

  website() {
    return this.subscription.website;
  }

  plan() {
    return this.subscription.plan;
  }

  price() {
    return this.subscription.price;
  }

  date() {
    let date = this.afterDate();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = this.months(date.getMonth());

    return `${day} de ${month} de ${date.getFullYear()}`;
  }

  modelSubscription() {
    return modelSubscriptionList[this.subscription.modelSubscription].text;
  }

  afterDate() {
    let date = new SubscriptionDate(this.subscription.date, this.subscription.modelSubscription);

    return date;
  }

  months(month) {
    const months = {
      0: "janeiro",
      1: "fevereiro",
      2: "março",
      3: "abril",
      4: "maio",
      5: "junho",
      6: "julho",
      7: "agosto",
      8: "setembro",
      9: "outubro",
      10: "novembro",
      11: "dezembro",
    };
    return months[month] ?? "...";
  }

  toObject() {
    return this.subscription;
  }
}
