export default class SubscriptionDate {
  date = null;

  year = null;

  month = null;

  day = null;

  checkRenewalDay = false;

  modelSubscription = {
    quarterly: () => this.quarterly(),
    annually: () => this.annually(),
    monthly: () => this.monthly(),
    weekly: () => this.weekly(),
    daily: () => this.daily(),
  };

  constructor(date, modelSubscription) {
    this.dateInit = new Date(date);
    this.date = new Date(date);
    this.dateToday = new Date();

    this.generateDate(this.date, modelSubscription);

    return [this.date, this.checkRenewalDay];
  }

  generateDate(date, modelSubscription) {
    this.date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

    this.year = this.date.getUTCFullYear();
    this.month = this.date.getUTCMonth();
    this.day = this.date.getUTCDate();

    this.modelSubscription[modelSubscription]();
  }

  verifyDay() {
    if (this.date.getUTCDate() < this.day) {
      this.date = new Date(this.date.getUTCFullYear(), this.date.getUTCMonth(), 0);
    }
  }

  formatDate(date) {
    return date.getUTCFullYear() + "-" + date.getUTCMonth() + "-" + date.getUTCDate();
  }

  checkRenewalDateDay() {
    let date = this.formatDate(this.date);
    let dateToday = this.formatDate(this.dateToday);
    let dateInit = this.formatDate(this.dateInit);

    this.checkRenewalDay = date === dateToday && dateToday !== dateInit;
  }

  checkRenewalAfterDay(callback) {
    this.checkRenewalDateDay();
    if (this.date.getTime() < this.dateToday.getTime()) {
      callback();
    }
  }

  quarterly() {
    let yearsStep = 3;
    let years = this.formula(this.dateToday.getUTCFullYear(), this.date.getUTCFullYear(), yearsStep);

    this.date.setUTCFullYear(years - yearsStep);

    this.checkRenewalAfterDay(() => this.date.setUTCFullYear(years));

    this.verifyDay();
  }

  annually() {
    let yearStep = 1;
    let year = this.formula(this.dateToday.getUTCFullYear(), this.date.getUTCFullYear(), yearStep);

    this.date.setUTCFullYear(year - yearStep);

    this.checkRenewalAfterDay(() => this.date.setUTCFullYear(year));

    this.verifyDay();
  }

  monthly() {
    let monthStep = 1;
    let month = this.formula(this.dateToday.getUTCMonth() - 1, this.date.getUTCMonth() - 1, monthStep);
    this.date.setUTCMonth(month);
    this.date.setUTCFullYear(this.dateToday.getUTCFullYear());

    this.checkRenewalAfterDay(() => this.date.setUTCMonth(month + 1));

    this.verifyDay();
  }

  weekly() {
    let dayWeek = this.date.getUTCDay();
    let dayWeekToday = this.dateToday.getUTCDay();
    let daysStep = dayWeek - dayWeekToday;

    if (daysStep === 0) {
      this.checkRenewalDay = true;
    }

    daysStep = daysStep <= 0 ? daysStep + 7 : daysStep;

    this.date.setUTCFullYear(this.dateToday.getUTCFullYear());
    this.date.setUTCMonth(this.dateToday.getUTCMonth());
    this.date.setUTCDate(this.dateToday.getUTCDate() + daysStep);
  }

  daily() {
    let dayStep = 1;
    let day = this.formula(this.dateToday.getUTCDate(), this.date.getUTCDate(), dayStep);
    this.date.setUTCFullYear(this.dateToday.getUTCFullYear());
    this.date.setUTCDate(day);

    this.checkRenewalDay = true;
  }

  formula(today, start, additional) {
    let x = Math.abs(today - start) % additional;
    return today + additional - x;
  }
}
