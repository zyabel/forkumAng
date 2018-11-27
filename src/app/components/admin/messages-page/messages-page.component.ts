import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DataServiceService } from '../../../services/data-service.service';
import { Message } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MessagesPageComponent implements OnInit {
  isLoading: boolean = true;

  messages: Message[];

  constructor(private dataServiceService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataServiceService.getAllMessage()
      .subscribe(collection => {
        this.messages = collection;
        this.isLoading = false;
        this.cd.detectChanges();
      });
  }

  deleteMessage(id) {
    this.dataServiceService.deleteMessage(id);
  }

  trackByFn(index, item) {
    return index;
  }
}
