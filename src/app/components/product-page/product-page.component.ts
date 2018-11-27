import { Component, OnInit, TemplateRef } from '@angular/core';

import { ProductCard } from '../../interfaces/news.interface';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productsArray: ProductCard[];

  productCard: ProductCard;

  contentArray = new Array(90).fill('');
  returnedArray: string[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.contentArray = this.contentArray.map((v: string, i: number) => `Content line ${i + 1}`);
    this.returnedArray = this.contentArray.slice(0, 10);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
