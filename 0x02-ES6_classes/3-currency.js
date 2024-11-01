export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // name getter and setter

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // length getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
