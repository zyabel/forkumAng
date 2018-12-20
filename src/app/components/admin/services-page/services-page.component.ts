import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

import { DataServiceService } from '../../../services';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ServicesPageComponent implements OnInit {
  priceArrow: [];

  constructor(private dataService: DataServiceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getServicesPriceData()
      .subscribe((arg) => {
        this.priceArrow = arg;
        this.cd.detectChanges();
      });
  }

  submitForm(row) {
    console.log(row);
  }

  deletePriceItem(id): void {
    console.log(id);
  }
}
