import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  data ?: any = [1,2,3];
  @Input() columns ?: {name: string, style: string}[];
  sizes ?: { name: string; class: string; }[];

  @Output() viewRecord = new EventEmitter();
  @Output() updateRecord = new EventEmitter();
  @Output() deleteRecord = new EventEmitter();

  first = 0;
  rows = 10;

  constructor() { }

  ngOnInit() {
      this.sizes = [
        { name: 'Small', class: 'p-datatable-sm' },
        { name: 'Normal', class: '' },
        { name: 'Large',  class: 'p-datatable-lg' }
    ];
  }

  next() {
      this.first = this.first + this.rows;
   }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  pageChange(event : any) {
      this.first = event.first;
      this.rows = event.rows;
  }

  isLastPage(): boolean {
      return this.data ? this.first === this.data.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.data ? this.first === 0 : true;
  }


  viewCurrentRecords(record : any){
       this.viewRecord.emit(record);
  }

  updateCurrentRecords(record : any){
    this.updateRecord.emit(record);
  }
  
  deleteCurrentRecords(record : any){
    this.deleteRecord.emit(record);
  }


}