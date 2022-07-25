class BankAccount {
  #balance = 0;
  #accountType = 0;
  static accountInfoList = [];
  static operation = "";

  constructor(balance, accountType) {
    this.balance = balance;
    this.accountType = accountType;
  }

  createAccount(balance, accountType) {
    this.balance = balance;
    this.accountType = accountType;
  }

  static openModal() {
    const modal = document.getElementById("bankModal");
    modal.style.display = "block";
  }

  static closeModal() {
    const modal = document.getElementById("bankModal");
    modal.style.display = "none";
    BankAccount.operation = "";
    BankAccount.clearDropDown();
    BankAccount.clearModalFields();
  }

  static populateDropdown() {
    const select = document.getElementById("accountNames");
    for (let i = 0; i < this.accountInfoList.length; i++) {
      const account = this.accountInfoList[i];
      const optionElement = document.createElement("option");
      optionElement.textContent = account.getAccountType();
      optionElement.value = account.getAccountType();
      select.appendChild(optionElement);
    }
  }

  static clearDropDown() {
    const select = document.getElementById("accountNames");
    select.innerHTML = "";
    select.innerHTML = `<option disabled selected value>-- select an option --</option>`;
  }

  static enableSubmitButton() {
    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = false;
  }

  static disableSubmitButton() {
    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
  }

  static getAmountFromModal() {
    const amount = parseFloat(document.getElementById("amount").value);
    return amount;
  }

  static clearModalFields() {
    const amount = document.getElementById("amount");
    amount.value = "";
  }

  static onSubmitButtonClick() {
    const amount = BankAccount.getAmountFromModal();
    const accountName = document.getElementById("accountNames").value;
    if (BankAccount.operation === "deposit") {
      BankAccount.accountInfoList.forEach((account, index, arr) => {
        if (account.getAccountType() === accountName) {
          arr[index].setBalance(arr[index].getBalance() + amount);
        }
      });
    } else {
      BankAccount.accountInfoList.forEach((account, index, arr) => {
        if (account.getAccountType() === accountName) {
          if (amount > account.getBalance()) {
            return alert("Insufficient funds");
          }
          arr[index].setBalance(arr[index].getBalance() - amount);
        }
      });
    }
    BankAccount.disableSubmitButton();
    BankAccount.displayAccounts();
    BankAccount.clearModalFields();
    BankAccount.closeModal();
    BankAccount.operation = "";
  }

  static deposit() {
    BankAccount.operation = "deposit";
    BankAccount.openModal();
    BankAccount.populateDropdown();
  }

  static debit() {
    BankAccount.operation = "withdraw";
    BankAccount.openModal();
    BankAccount.populateDropdown();
    const amount = BankAccount.getAmountFromModal();
    const accountName = document.getElementById("accountNames").value;

    this.balance -= amount;
    BankAccount.disableSubmitButton();
    BankAccount.displayAccounts();
  }

  getBalance() {
    return this.balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  getAccountType() {
    return this.accountType;
  }

  static handleCreateNewAccount() {
    const accountType = document.getElementById("accountType").value;
    const deposit = parseFloat(document.getElementById("deposit").value);
    const bankAccount = new BankAccount();
    bankAccount.createAccount(deposit, accountType);
    BankAccount.accountInfoList.push(bankAccount);
    BankAccount.displayAccounts();
    BankAccount.clearInputFields();
  }

  static displayAccounts() {
    const accountList = document.getElementById("accountDetails");
    let accountDetails = [];
    BankAccount.accountInfoList.forEach((account) => {
      accountDetails.push(
        `Account Name:  ${account.getAccountType()}, Balance: ${account.getBalance()}`
      );
    });

    accountList.value = accountDetails.join("\n");
  }

  static clearInputFields() {
    const accountType = document.getElementById("accountType");
    const deposit = document.getElementById("deposit");
    accountType.value = "";
    deposit.value = "";
  }
}
