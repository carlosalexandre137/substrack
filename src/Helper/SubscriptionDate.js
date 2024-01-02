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
    this.dateInit = new Date(date + " ");
    this.date = this.dateInit;
    this.dateToday = new Date();

    this.generateDate(this.date, modelSubscription);

    return [this.date, this.checkRenewalDay];
  }

  generateDate(date, modelSubscription) {
    this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();

    this.modelSubscription[modelSubscription]();
  }

  verifyDay() {
    if (this.date.getDate() < this.day) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    }
  }

  formatDate(date) {
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
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
    let years = this.formula(this.dateToday.getFullYear(), this.date.getFullYear(), yearsStep);

    this.date.setFullYear(years - yearsStep);

    this.checkRenewalAfterDay(() => this.date.setFullYear(years));

    this.verifyDay();
  }

  annually() {
    let yearStep = 1;
    let year = this.formula(this.dateToday.getFullYear(), this.date.getFullYear(), yearStep);

    this.date.setFullYear(year - yearStep);

    this.checkRenewalAfterDay(() => this.date.setFullYear(year));

    this.verifyDay();
  }

  monthly() {
    let monthStep = 1;
    let month = this.formula(this.dateToday.getMonth() - 1, this.date.getMonth() - 1, monthStep);
    this.date.setMonth(month);
    this.date.setFullYear(this.dateToday.getFullYear());

    this.checkRenewalAfterDay(() => this.date.setMonth(month + 1));

    this.verifyDay();
  }

  weekly() {
    let dayWeek = this.date.getDay();
    let dayWeekToday = this.dateToday.getDay();
    let daysStep = dayWeek - dayWeekToday;

    if (daysStep === 0) {
      this.checkRenewalDay = true;
    }

    daysStep = daysStep <= 0 ? daysStep + 7 : daysStep;

    this.date.setFullYear(this.dateToday.getFullYear());
    this.date.setMonth(this.dateToday.getMonth());
    this.date.setDate(this.dateToday.getDate() + daysStep);
  }

  daily() {
    let dayStep = 1;
    let day = this.formula(this.dateToday.getDate(), this.date.getDate(), dayStep);
    this.date.setFullYear(this.dateToday.getFullYear());
    this.date.setDate(day);

    this.checkRenewalDay = true;
  }

  formula(today, start, additional) {
    let x = Math.abs(today - start) % additional;
    return today + additional - x;
  }
}
