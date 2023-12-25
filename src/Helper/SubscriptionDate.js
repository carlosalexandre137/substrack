export default class SubscriptionDate {
  date = null;

  year = null;

  month = null;

  day = null;

  hors = "05";

  modelSubscription = {
    quarterly: () => this.quarterly(),
    annually: () => this.annually(),
    monthly: () => this.monthly(),
    weekly: () => this.weekly(),
    daily: () => this.daily(),
  };

  constructor(date, modelSubscription) {
    let timeToday = new Date().getTime();

    this.date = new Date(date + " " + this.hors + ":00:00");
    this.date.setHours(this.hors);

    do {
      this.generateDate(this.date, modelSubscription);
    } while (timeToday > this.date.getTime());

    return this.date;
  }

  generateDate(date, modelSubscription) {
    this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), this.hors);

    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();

    this.modelSubscription[modelSubscription]();
  }

  verifyDay() {
    if (this.date.getDate() < this.day) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0, this.hors);
    }
  }

  quarterly() {
    this.date.setFullYear(this.date.getFullYear() + 3);
    this.verifyDay();
  }

  annually() {
    this.date.setFullYear(this.date.getFullYear() + 1);
    this.verifyDay();
  }

  monthly() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.verifyDay();
  }

  weekly() {
    this.date.setDate(this.date.getDate() + 7);
  }

  daily() {
    this.date.setDate(this.date.getDate() + 1);
  }
}
