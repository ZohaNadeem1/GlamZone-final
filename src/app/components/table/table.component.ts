import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { JobFirebaseService } from 'src/app/service/job.firebase.service';
import { ActivatedRoute } from '@angular/router';
import { AddServiceComponent } from '../add-service/add-service.component';
import { AddJobComponent } from '../add-job/add-job.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  data ?: any = [];
  sizes ?: { name: string; class: string; }[];

  @Input() viewType ?: string;
  @Input() columns ?: {name: string, style: string}[];

  @Output() viewRecord = new EventEmitter();
  @Output() updateRecord = new EventEmitter();
  @Output() deleteRecord = new EventEmitter();

  @ViewChild(AddServiceComponent) addServiceComponent ?: AddServiceComponent;
  @ViewChild(AddJobComponent) addJobComponent ?: AddJobComponent;


  first = 0;
  rows = 10;

  constructor(private route : ActivatedRoute) { 
  }

  ngOnInit() {
      this.sizes = [
        { name: 'Small', class: 'p-datatable-sm' },
        { name: 'Normal', class: '' },
        { name: 'Large',  class: 'p-datatable-lg' }
    ];
    if(this.viewType == 'jobs'){
      const results = this.route.snapshot.data['jobsData'];
      results.forEach((result : any) => {
        this.data.push(result.data());
        console.log(result.data());
      });  
    }
     
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
  

  showAddServiceDialog() {
      this.addServiceComponent?.toogleDialog();
  }

  showJobDialog() {
    this.addJobComponent?.toogleDialog();
   }

}
