import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "../service/customer/customer.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild('customerForm') customerForm!: NgForm;

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
    this.customerService.save(this.customer).subscribe((response) => {
      console.log(response);
      this.getAll();
      this.customerForm.resetForm();
    });
  }
}
