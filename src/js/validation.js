import paymentSystems from './paymentSystems';

export default class Validation {
  constructor(string) {
    this.string = string;
  }

  checkValidation() {
    if (this.string === '') return false;

    const clone = this.string.split('');
    const { length } = clone;

    //  1. Drop the last digit
    const lastNumber = clone.splice(length - 1, 1)[0];

    // 2. Reverse the digits
    const cloneReverse = clone.reverse();

    // 3. Multiple odd digits by 2
    const cloneMult = cloneReverse.map((item, index) => {
      if ((index + 1) % 2 !== 0) {
        return item * 2;
      }

      return item;
    });

    // 4. Subtract 9 to numbers over 9
    const cloneSubs = cloneMult.map((item) => {
      if (item > 9) {
        return item - 9;
      }
      return item;
    });

    // 5. Add all numbers
    const summElements = cloneSubs.reduce((sum, current) => sum + (+current), 0);

    // 6. Mod 10
    if ((summElements + (+lastNumber)) % 10 === 0) return true;

    return false;
  }

  checkCardIssue() {
    return paymentSystems.find((item) => item.cardReg.test(this.string));
  }

  // 2 - MIR 2201 2200(16)
  // 3 - JSB 35, 38 (16-19) or Diners Club 36(14) or American Express 34, 37(15)
  // 4 - Visa (13-16-19)
  // 5 - Master Card 51, 52, 53, 54, 55 (16)
  // 6 - Discover 6011, 644, 645, 646, 647, 648, 649, 65(16-19)
}
