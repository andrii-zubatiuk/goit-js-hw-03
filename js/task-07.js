/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactions.length + 1,
      amount: amount,
      type: type,
    };

    return newTransaction;
  },

  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('На вашем счету недостаточно средств');
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let result;

    this.transactions.forEach(transaction => {
      if (id === transaction.id) {
        result = transaction;
      }
    });

    return result;
  },

  getTransactionTotal(type) {
    let result = 0;

    this.transactions.forEach(transaction => {
      if (type === transaction.type) {
        result += transaction.amount;
      }
    });

    return result;
  },
};

console.log(account.transactions);

account.deposit(2500);

account.deposit(500);

account.withdraw(400);

account.deposit(700);

account.withdraw(500);

account.withdraw(5000);

console.log(account.getBalance());

console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal('deposit'));
