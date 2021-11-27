const Account = require('../lib/account');
const statement = require('../lib/statement');

jest.mock('../lib/statement');

describe('Account', () => {
  let bankAccount = new Account();

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

  it('logs a statement to console', () => {
    console.log = jest.fn();

    new Account().printStatement();
    expect(console.log).toHaveBeenCalled();
    expect(statement).toHaveBeenCalledWith([]);
    // testing that it passes the account history to the statement module
  });

  describe('Edge cases', () => {
    it('prevents withdrawal when the amount exceeds the balance', () => {
      bankAccount = new Account(100);
      expect(() => bankAccount.withdraw(150)).toThrow(
        'That amount exceeds your balance.'
      );
    });

    it('prevents withdrawal when balance is negative', () => {
      let emptyAccount = new Account();
      expect(() => emptyAccount.withdraw(1)).toThrow(
        'That amount exceeds your balance.'
      );
    });
  });
});
