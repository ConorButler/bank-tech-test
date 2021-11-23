const statement = (history) => {
  let header = 'date || credit || debit || balance';
  let body = [];

  history.forEach((entry) => {
    let date = entry.date.toLocaleString('en-GB').substr(0, 10);
    // converting Date object to UK time format
    if (entry.credit) {
      body.push(
        `${date} || ${entry.credit.toFixed(2)} || || ${entry.balance.toFixed(
          2
        )}`
      );
    } else {
      body.push(
        `${date} || || ${entry.debit.toFixed(2)} || ${entry.balance.toFixed(2)}`
      );
    } // matching the example in README exactly
  });

  body = body.reverse();
  return [header, body.join('\n')].join('\n');
};

module.exports = statement;
