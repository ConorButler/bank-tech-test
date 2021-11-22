const Account = require('./account');

describe('Account', () => {
  let bankAccount = new Account();

  // beforeEach(() => {
  //   bankAccount = new Account();
  // });

  it('stores a balance', () => {
    expect(bankAccount.balance).toEqual(0);
  });

  it('deposits an amount', () => {
    bankAccount.deposit(200);
    expect(bankAccount.balance).toEqual(200);
  });

  it('withdraws an amount', () => {
    bankAccount.withdraw(100);
    expect(bankAccount.balance).toEqual(100);
  });
});
