import { Component, Input } from '@angular/core';

import LoggingService from '../../services/logging.service';
import AccountsService, { Account } from '../../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: Account = { name: '', status: '' };
  @Input() id: number = 0;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService,
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.account.name, status);
    this.loggingService.logStatusChange(status);
  }
}
