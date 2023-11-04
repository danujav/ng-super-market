import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  numberOfCustomers: number = 540;
  numberOfItems: number = 1200;

  isShow: boolean = false;

  toggleButtonClick(): void {
    this.isShow = !this.isShow;
  }
}
