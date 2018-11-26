import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DataServiceService } from '../../../services';
import { News } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHomePageComponent implements OnInit {
  newsArray: News[];

  isLoading: boolean = true;

  newsNew: News;

  news: News;

  isEdit: boolean = false;

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataService.getNewsData()
      .subscribe(data => {
        this.isLoading = false;
        this.newsArray = data;
        this.cd.detectChanges();
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
    this.isEdit = true;
  }

  confirmEditNews(title: string, text: string, data: string) {
    const updateNews = Object.assign( {}, this.news);
    this.dataService.editNews(updateNews);
    this.isEdit = false;
  }

  deleteNews(id: string): void {
    this.dataService.deleteNews(id);
  }

  trackByFn(index, item) {
    return index;
  }

  cancelNews(): void {
    this.isEdit = false;
  }
}
