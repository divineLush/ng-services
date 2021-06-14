export type Account = {
  name: string,
  status: string,
};

class AccountsService {
  accounts: Account[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    }
  ];

  addAccount(account: Account) {
    this.accounts.push(account);
  }

  updateStatus(name: string, status: string) {
    for (let account of this.accounts) {
      if (account.name === name) {
        account.status = status;
      }
    }
  }
}

export default AccountsService;
