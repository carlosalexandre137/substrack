import { ModalityOptionsConfig } from "../config/Subscription";
import { formatToReadableDate } from "../utils/Date";

export default class SubscriptionDateHelper {
  private readonly _dateInit: Date;

  private date: Date;

  private dateToday: Date;

  private _dateRenewal: string = "";

  private _checkIfTheRenewalIsToday: boolean = false;

  private listMethodExecModality = {
    quarterly: () => this.quarterly.bind(this)(),
    annually: () => this.annually.bind(this)(),
    monthly: () => this.monthly.bind(this)(),
    weekly: () => this.weekly.bind(this)(),
    daily: () => this.daily.bind(this)(),
  };

  constructor(date: Date, private modality: keyof typeof ModalityOptionsConfig) {
    this._dateInit = new Date(date);
    this.date = new Date(this._dateInit);
    this.dateToday = new Date();
    this.dateToday.setHours(0, 0, 0, 0);

    this.createDateRenewal();
  }

  private createDateRenewal(): void {
    this.listMethodExecModality[this.modality]();
    this._dateRenewal = formatToReadableDate(this.date);
  }

  private quarterly(): void {
    const step = 3;
    const year = this.formula(
      this.dateToday.getFullYear(),
      this.date.getFullYear(),
      step
    );

    this.date.setFullYear(year - step);

    this.checkRenewalAfterDay(() => this.date.setFullYear(year));

    this.verifyDay();
  }

  private annually(): void {
    const step = 1;
    const year = this.formula(
      this.dateToday.getFullYear(),
      this.date.getFullYear(),
      step
    );

    this.date.setFullYear(year - step);

    this.checkRenewalAfterDay(() => this.date.setFullYear(year));

    this.verifyDay();
  }

  private monthly(): void {
    const step = 1;

    const month = this.formula(this.dateToday.getMonth(), this.date.getMonth(), step);

    this.date.setFullYear(this.dateToday.getFullYear(), month - step);

    this.checkRenewalAfterDay(() => this.date.setMonth(month));

    this.verifyDay();
  }

  private weekly(): void {
    const week = this.date.getDay();
    const weekToday = this.dateToday.getDay();
    let step = week - weekToday;

    step = step <= 0 ? step + 7 : step;

    this.date.setFullYear(this.dateToday.getFullYear(), this.dateToday.getMonth());
    this.date.setDate(this.dateToday.getDate() + step);
  }

  private daily(): void {
    const step = 1;
    const day = this.formula(this.dateToday.getDate(), this.date.getDate(), step);
    this.date.setFullYear(this.dateToday.getFullYear());
    this.date.setDate(day);
    this._checkIfTheRenewalIsToday = true;
  }

  private checkRenewalAfterDay(callback: () => void): void {
    this._checkIfTheRenewalIsToday = this.checkRenewalIsToday();

    if (this.date.getTime() <= this.dateToday.getTime()) {
      callback();
    }
  }

  private formula(today: number, start: number, additional: number): number {
    const x = Math.abs(today - start) % additional;
    return today + additional - x;
  }

  private verifyDay(): void {
    if (this.date.getDate() < this._dateInit.getDate()) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    }
  }

  private checkRenewalIsToday(): boolean {
    return (
      this.date.getTime() === this.dateToday.getTime() &&
      this.dateToday.getTime() !== this._dateInit.getTime()
    );
  }

  get dateRenewal(): string {
    return this._dateRenewal;
  }

  get checkIfTheRenewalIsToday(): boolean {
    return this._checkIfTheRenewalIsToday;
  }

  get dateInit(): string {
    return formatToReadableDate(this._dateInit);
  }
}
