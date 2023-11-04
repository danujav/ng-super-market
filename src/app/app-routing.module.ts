import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomerComponent} from "./customer/customer.component";
import {PostComponent} from "./post/post.component";
import {NotfoundComponentComponent} from "./notfound-component/notfound-component.component";

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
