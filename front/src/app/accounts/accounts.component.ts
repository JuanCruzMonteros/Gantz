import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from '../accounts/models/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }


  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      accounts =>{
        this.accounts = accounts
        console.log(accounts);
      } 
    );
    
  }

}
