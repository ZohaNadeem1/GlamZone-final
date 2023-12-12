import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

    
    @ViewChild(ConfirmationComponent) confirmationComponent ?: ConfirmationComponent;

    jobsTable = [{
           name: 'Job Title',
           style: 'width:25%'
        },
    {
        name: 'Job Creation Date',
        style: 'width:15%; text-align:center'
    }, 
    {
        name: 'Applicants',
        style: 'width:15%; text-align:center'
    },
    {
        name: 'Status',
        style: 'width:15%; text-align:center'
    },
    {
        name: 'Action',
        style: 'width:55%; text-align:center'
    }
];

    ngOnInit(): void {
      
    }

    viewCurrentRecord(event: any ){
            console.log('HERE ', event);
    }

    deleteCurrentRecord(event: any ){
        this.confirmationComponent?.confirm(event);
            console.log('HERE ', event);
    }
   
    updateCurrentRecord(event: any ){
            console.log('HERE ', event);
     }
 
}
