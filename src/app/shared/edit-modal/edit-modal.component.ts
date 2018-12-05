import { Component, EventEmitter, OnInit, TemplateRef, Input, Output } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  modalRef: BsModalRef;

  @Input() returnedArray;

  @Input() cash;

  @Output() delete = new EventEmitter<boolean>();

  @Output() edit = new EventEmitter<{}>();

  @Output() editCash = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) { }

  ngOnInit() {}

  deleteCard(id) {
    this.delete.emit(id);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  editCard(id, tableData, field) {
    const event = {id, tableData, field};
    this.edit.emit(event);
  }

  editCardCash(cash) {
    this.editCash.emit(cash);
  }
}
