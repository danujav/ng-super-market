import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "../service/customer/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer = {
    id: 0,
    name: '',
    address: '',
    tel: ''
  }
  customerData: any;
  customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.customerService.get().subscribe((response) => {
      this.customerData = response.data;
    });
  }

  saveCustomer(): void {
    console.log(this.customer);
  }
}
