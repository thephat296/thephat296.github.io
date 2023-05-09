class Accounts {
  static accountInfoList = [];

  createAccount(accountName, balance) {
    let account = Accounts.accountInfoList.find(
      (account) => account.accountName == accountName
    );
    if (account) return;
    Accounts.accountInfoList.push({ accountName, balance });
  }

  deposit(accountName, amount) {
    let account = Accounts.accountInfoList.find(
      (account) => account.accountName == accountName
    );
    if (!account) return;
    account.balance += amount;
  }

  debit(accountName, amount) {
    let account = Accounts.accountInfoList.find(
      (account) => account.accountName == accountName
    );
    if (!account) return;
    account.balance -= amount;
  }
}

let accounts = new Accounts();
let accountName = document.getElementById("account-name");
let initialDeposit = document.getElementById("initial-deposit");
let createAccount = document.getElementById("create-account");
let accountListDropDown = document.getElementById("account-list-dropdown");
let depositAmount = document.getElementById("deposit-amount");
let depositButton = document.getElementById("deposit-button");
let debitAmount = document.getElementById("debit-amount");
let debitButton = document.getElementById("debit-button");
let accountInfoListTextArea = document.getElementById("account-info-list");

depositButton.disabled = !accountListDropDown.value;
debitButton.disabled = !accountListDropDown.value;

createAccount.onclick = () => {
  let accountNameValue = accountName.value;
  let depositValue = parseFloat(initialDeposit.value);
  if (!accountNameValue || !depositValue) return;
  accounts.createAccount(accountNameValue, depositValue);

  let accountOption = document.createElement("option");
  accountOption.innerText = accountNameValue;
  accountListDropDown.add(accountOption);
  depositButton.disabled = false;
  debitButton.disabled = false;
  displayAccountInfoList();
};

depositButton.onclick = () => {
  let amount = parseFloat(depositAmount.value);
  if (!amount) return;
  accounts.deposit(accountListDropDown.value, amount);
  displayAccountInfoList();
};

debitButton.onclick = () => {
  let amount = parseFloat(debitAmount.value);
  if (!amount) return;
  accounts.debit(accountListDropDown.value, amount);
  displayAccountInfoList();
};

function displayAccountInfoList() {
  var accountInfoList = "";
  Accounts.accountInfoList.forEach((account) => {
    accountInfoList +=
      "Account name: " +
      account.accountName +
      " Balance: " +
      account.balance +
      "\n";
  });
  accountInfoListTextArea.innerHTML = accountInfoList;
}
