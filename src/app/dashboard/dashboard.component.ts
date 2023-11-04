import {Component, OnInit} from '@angular/core';
import {Item} from "./item";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  numberOfCustomers: number = 540;
  numberOfItems: number = 1200;
  numberOfSuppliers: number = 10;
  isShow: boolean = false;
  itemList: Item[] = [
    {
      code: 'I001',
      description: 'Product 1',
      price: 100,
      qtyOnHand: 0
    },
    {
      code: 'I002',
      description: 'Product 2',
      price: 200,
      qtyOnHand: 0
    },
    {
      code: 'I003',
      description: 'Product 3',
      price: 300,
      qtyOnHand: 30
    },
    {
      code: 'I004',
      description: 'Product 4',
      price: 400,
      qtyOnHand: 40
    },
    {
      code: 'I005',
      description: 'Product 5',
      price: 500,
      qtyOnHand: 0
    }
  ]

  apiData: any;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.dataService.getApiData().subscribe((response) => {
      this.apiData = response;
    });
  }

  toggleButtonClick(): void {
    this.isShow = !this.isShow;
  }
}
