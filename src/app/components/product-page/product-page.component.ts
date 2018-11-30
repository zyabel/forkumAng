import { Component, OnInit, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { ProductCard } from '../../interfaces/news.interface';
import { DataServiceService } from '../../services';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ProductPageComponent implements OnInit {
  type: string = 'splitCollection';

  productsArray: ProductCard[] = [];

  productCard: ProductCard;

  returnedArray: ProductCard[];

  modalRef: BsModalRef;

  isLoading: boolean = true;

  constructor(private modalService: BsModalService,
              private dataService: DataServiceService,
              private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCurrentData(this.type);
  }

  getCurrentData(type: string) {
    this.dataService.getAllProducts(type)
    .subscribe(items => {
      this.productsArray = items;
      this.isLoading = false;
      this.returnedArray = this.productsArray.slice(0, 12);
      this.cd.detectChanges();
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * (event.itemsPerPage + 2);
    const endItem = event.page * (event.itemsPerPage + 2);
    this.returnedArray = this.productsArray.slice(startItem, endItem);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  selectedPills(event: TabDirective): string {
    switch (event.id) {
      case '1':
        this.getCurrentData('splitCollection');
        break;

      case '2':
        this.getCurrentData('promCollection');
        break;

      case '3':
        this.getCurrentData('nameCollection');
        break;

      case '4':
        this.getCurrentData('nameCollection');
        break;

      case '5':
        this.getCurrentData('saleCollection');
        break;

      default:
        return 'splitCollection';
    }
  }
}
