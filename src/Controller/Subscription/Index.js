import { modelSubscriptionList } from "../../Config/Subscription";

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
    let date = new Date(this.subscription.date);

    switch (this.subscription.modelSubscription) {
      case "quarterly":
        date.setFullYear(date.getFullYear() + 3);
        break;
      case "annually":
        date.setFullYear(date.getFullYear() + 1);
        break;
      case "monthly":
        date.setMonth(date.getMonth() + 1);
        break;
      case "weekly":
        date.setDate(date.getDate() + 7);
        break;
      case "daily":
        date.setDate(date.getDate() + 1);
        break;
      default:
        break;
    }

    date.setDate(date.getDate() + 1);

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
}
