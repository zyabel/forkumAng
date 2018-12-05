import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.scss']
})
export class ModalTableComponent {
  @Input() tableData;
}
