// If you inject service into anything, this anything needs to have metadata attached to it.
import { Injectable } from '@angular/core';

import LoggingService from '../services/logging.service';

export type Account = {
  name: string,
  status: string,
};

// gotta add @Injectable cause we inject another service into AccountsService
@Injectable()
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

  constructor(private loggingService: LoggingService) {}

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logStatusChange(account.status);
  }

  updateStatus(name: string, status: string) {
    for (let account of this.accounts) {
      if (account.name === name) {
        account.status = status;
        this.loggingService.logStatusChange(status);
      }
    }
  }
}

export default AccountsService;
