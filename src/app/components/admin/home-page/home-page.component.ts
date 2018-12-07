import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { DataServiceService } from '../../../services';
import { News, Slide } from '../../../interfaces/news.interface';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AdminHomePageComponent implements OnInit {
  newsArray: News[];

  sliderArray: Slide[];

  isLoading: boolean = true;

  newsNew: News;

  news: News;

  slide: Slide;

  isEditNews: boolean = false;

  isEditSlide: boolean = false;

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataService.getNewsData()
      .subscribe(data => {
        this.isLoading = false;
        this.newsArray = data;
        this.cd.detectChanges();
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

  addNews(title: string, text: string, data): void {
    this.newsNew = {
      title: title,
      text: text,
      data: data
    };

    this.dataService.addNews(this.newsNew);
    this.cd.markForCheck();
  }

  editNews(id: string): void {
    if (this.news === undefined) {
      this.news = {
        title: '',
        text: '',
        data: ''
      };
    }

    this.dataService.getNewsById(id)
      .subscribe((data: News) => {
        this.news = data;
        this.news.id = id;

        this.cd.detectChanges();
      });
    this.isEditNews = true;
  }

  editSlide(id: string): void {
    if (this.slide === undefined) {
      this.slide = {
        path: '',
        title: '',
        info: ''
      };
    }

    this.dataService.getSlideById(id)
      .subscribe((data: Slide) => {
        this.slide = data;
        this.slide.id = id;

        this.cd.detectChanges();
      });
    this.isEditSlide = true;
  }

  confirmEditNews(title: string, text: string, data: string): void {
    const updateNews = Object.assign( {}, this.news);
    this.dataService.editNews(updateNews);
    this.isEditNews = false;
  }

  confirmEditSlide(title: string, info: string, path: string): void {
    const updateSlide = Object.assign( {}, this.slide);
    this.dataService.editSlide(updateSlide);
    this.isEditSlide = false;
  }

  deleteNews(id: string): void {
    this.dataService.deleteNews(id);
  }

  deleteSlide(id: string): void {
    this.dataService.deleteSlide(id);
  }

  trackByFn(index, item) {
    return index;
  }

  cancel(): void {
    this.isEditNews = false;
    this.isEditSlide = false;
  }
}
