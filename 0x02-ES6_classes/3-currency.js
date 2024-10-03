export default class Currency {
  constructor(code, name) {
    this.verifyCode(code);
    this.verifyName(name);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this.verifyCode(newCode);
  }

  verifyCode(newCode) {
    if (typeof (newCode) !== 'string') {
      throw TypeError('Code must be a number');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.verifyName(newName);
  }

  verifyName(newName) {
    if (typeof (newName) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }
}
