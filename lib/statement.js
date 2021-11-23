const statement = (history) => {
  let header = 'date || credit || debit || balance';
  let body = [];

  history.forEach((entry) => {
    if (entry.credit) {
      body.push(
        `${entry.date} || ${entry.credit.toFixed(
          2
        )} || || ${entry.balance.toFixed(2)}`
      );
    } else {
      body.push(
        `${entry.date} || || ${entry.debit.toFixed(
          2
        )} || ${entry.balance.toFixed(2)}`
      );
    } // matching the example in README exactly
  });

  body = body.reverse();
  return [header, body.join('\n')].join('\n');
};

module.exports = statement;
