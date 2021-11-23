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

  it('calls the statement module', () => {
    new Account().statement();
    expect(statement).toHaveBeenCalledWith([]);
    // testing that it passes the account history to the statement module
  });
});
