// import  Currency  from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // name getter and setter

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // length getter and setter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
