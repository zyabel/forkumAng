import { Component, EventEmitter, OnInit, TemplateRef, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditModalComponent implements OnInit {
  modalRef: BsModalRef;

  @Input() returnedArray;

  @Input() cash;

  @Output() delete = new EventEmitter<boolean>();

  @Output() edit = new EventEmitter<{}>();

  @Output() editCash = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {}

  deleteCard(id): void {
    this.delete.emit(id);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  editCard(id, tableData, field): void {
    const event = {id, tableData, field};
    this.edit.emit(event);
  }

  editCardCash(cash): void {
    this.editCash.emit(cash);
  }
}
