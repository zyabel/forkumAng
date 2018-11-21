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
  newsArray: {}[];

  isLoading: boolean = true;

  news = {
    title: 'news',
    text: 'test text',
    data: new Date()
  };

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

  addNews(): void {
    this.dataService.addBook(this.news);
  }

  editNews(id: string) {
    console.log(id);
  }

  deleteNews(id: string): void {
    this.dataService.deleteBook(id);
  }

  trackByFn(index, item) {
    return index;
  }

}
