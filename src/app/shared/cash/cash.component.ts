import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html'
})
export class CashComponent implements OnInit {
  text: string;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getCashInfo()
      .subscribe(data => {
        this.text = data[0].text;
      });
  }
}
