import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../../services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newsArray: {}[];

  isLoading: boolean = true;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getNewsData()
      .subscribe(data => {
        if (data) {
          this.isLoading = false;
          this.newsArray = data;
        }
      });
  }

}
