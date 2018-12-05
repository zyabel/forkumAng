import { Component, OnInit, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { ProductCard } from '../../../interfaces/news.interface';
import { DataServiceService } from '../../../services';

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
export class AdminProductPageComponent implements OnInit {

  type: string = 'splitCollection';

  productsArray: ProductCard[] = [];

  productCard: ProductCard;

  returnedArray: ProductCard[];

  modalRef: BsModalRef;

  isLoading: boolean = true;

  cash;

  constructor(private modalService: BsModalService,
              private dataService: DataServiceService,
              private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCurrentData(this.type);
    this.dataService.getCashInfo()
      .subscribe(data => this.cash = data);
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
        this.type = 'splitCollection';
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
        this.type = 'saleCollection';
        this.getCurrentData('saleCollection');
        break;

      default:
        return 'splitCollection';
    }
  }

  deleteCard(id: string): void {
    this.dataService.deleteCard(id,  this.type);
  }

  editCard(event): void {
    this.dataService.editCard(event.id, this.type, event.tableData, event.field);
  }

  editCardCash(form): void {
    this.dataService.editCard(this.cash[0].id, 'cashCarry', form, 'text');
  }

  indexTracker(index: number, value: any) {
    return index;
  }
}
