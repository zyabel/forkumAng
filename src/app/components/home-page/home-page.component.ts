import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DataServiceService } from '../../services';
import { News, Slide } from '../../interfaces/news.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  sliderArray: Slide[];

  newsArray: News[];

  isLoading: boolean = true;

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getNewsData()
      .subscribe(data => {
        if (data) {
          this.newsArray = data;
          this.isLoading = false;
          this.cd.detectChanges();
        }
      });

    this.dataService.getSliderData()
      .subscribe(data => {
        if (data) {
          this.sliderArray = data;
          this.isLoading = false;
          this.cd.detectChanges();
        }
      });
  }

}
