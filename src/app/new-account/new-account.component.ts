import { Component } from '@angular/core';
import LoggingService from '../../services/logging.service';
import AccountsService from '../../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService,
  ) {}

  onCreateAccount(name: string, status: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount({ name, status });
    this.loggingService.logStatusChange(status);
  }
}
