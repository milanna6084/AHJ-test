import Validation from '../validation';

describe('Credit Card Validator', () => {
  test.each([
    ['45829617899446', false],
    ['4917222042843338', true],
    ['30338012861272', true],
    ['6011979896146411', true],
    ['555555555555555555', false],
    ['3530185348334694703', true],
    ['5509085077491542', true],
    ['', false],
  ])('should check cards validation', (number, isValid) => {
    const result = new Validation(number);
    expect(result.checkValidation()).toBe(isValid);
  });

  test.each([
    ['45829617899446', 'visa'],
    ['4917222042843338', 'visa'],
    ['371449635398431', 'american-express'],
    ['6011111111111117', 'discover'],
    ['3530111333300000', 'jsb'],
    ['5509085077491542', 'master-card'],
  ])('should choose cards payment system', (number, system) => {
    const payment = new Validation(number);
    const paySystem = payment.checkCardIssue().name;
    expect(paySystem).toBe(system);
  });
});
