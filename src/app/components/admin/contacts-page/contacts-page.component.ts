import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Message, PersonalInfo } from '../../../interfaces/news.interface';
import { DataServiceService } from '../../../services';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  personalInfo: PersonalInfo = {
    phone: {
      base: '',
      optional: '',
    },
    adress: '',
    email: ''
  };

  isLoading: boolean = true;
  isSuccess: boolean = false;
  isDanger: boolean = false;

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getPersonalInfo()
      .subscribe(info => {
        this.personalInfo = info[0];
        this.isLoading = false;
        this.cd.detectChanges();
      });
  }

  confirmEditInfo() {
    this.dataService.editPersonalInfo(this.personalInfo);
    this.isLoading = true;
    this.checkData();
  }

  checkData () {
    this.dataService.getPersonalInfo()
    .subscribe(info => {
      if (this.personalInfo = info[0]) {
        this.isLoading = false;
        this.isSuccess = true;
        this.cd.markForCheck();
      } else {
        this.isDanger = true;
        this.cd.markForCheck();
      }
    });
  }
}
