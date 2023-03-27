import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-creation-success',
  templateUrl: './account-creation-success.component.html',
  styleUrls: ['./account-creation-success.component.css']
})
export class AccountCreationSuccessComponent {
  constructor(
    private route: ActivatedRoute, 
      private router: Router) {

  }
}
