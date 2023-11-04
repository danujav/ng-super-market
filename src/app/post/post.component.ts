import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
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
}
