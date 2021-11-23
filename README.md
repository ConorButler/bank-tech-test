## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Assumptions

- The date is logged as the current date when the user makes a transaction

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## This is tested in test/statement.test.js

# Running the app

Setup

```
git clone https://github.com/ConorButler/bank-tech-test.git
cd bank-tech-test
npm install
npm test
```

Interacting with the app

```
node
Account = require('./lib/account')
```

Whilst inside the node REPL you can do the following:

Creating an account

```
bankAccount = new Account()
```

Depositing

```
bankAccount.deposit(500)
```

Withdrawing

```
bankAccount.withdraw(200)
```

Seeing a your statement

```
bankAccount.statement()
```

# My Approach

I decided to make statement a module because it didn't make sense for it to be a Class and instantiate a new object each time it's called, which would never get used. There are a lot of methods inside of it which was not what I planned, but I tried to replicate the acceptance criteria output 100% accurately, hence a lot of formatting methods inside the module. I still think this is SOLID because if you wanted to change how the statement appears you could quite easily edit any combination these methods or edit the module as a whole.

Transaction is a Class to respect SRP; Account was previously doing too many things, so I offloaded the storage of transaction attributes to the Transaction class and stored the Transaction objects in the Account instance.

I also made the program use the current date and there is no way to override this. This wasn't specified in the criteria but I think it simulates a realistic use of this type of application. This of course required stubbing the JavaScript Date class which thankfully Jest has methods for.

The part of my solution that I am least sure of is how I store the actual transaction objects, where I have credit or debit as null and the other with the amount. I started out this way to mimick the header in the example output, and by the time I reconsidered it I was very far into development and it would require a substantial refactor in order to implement a different method. I do think it works quite well inside the statement module as it doesn't require a lengthy if/else block to check it it's a credit or debit and made formatting relatively easy, but storing both of them seems quite pointless.
