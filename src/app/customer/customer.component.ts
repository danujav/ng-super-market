import {Component} from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customer: Customer = {
    id: 0,
    name: '',
    address: '',
    tel: ''
  }

  saveCustomer(): void {
    console.log(this.customer);
  }
}
