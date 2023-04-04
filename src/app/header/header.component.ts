import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private sessionService: SessionService,
        public customerService: CustomerService) {}
}
