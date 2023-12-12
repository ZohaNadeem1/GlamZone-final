import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { SharedService } from 'src/app/shared/Shared.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  
    @ViewChild(ConfirmationComponent) confirmationComponent ?: ConfirmationComponent;
    @ViewChild(DialogBoxComponent) dialogBoxComponent ?: DialogBoxComponent;

    jobsTable = [{
      name: 'Service Title',
      style: 'width:25%'
    },
    {
      name: 'Creation Date',
      style: 'width:15%; text-align:center'
    },
    {
      name: 'Bookings',
      style: 'width:15%; text-align:center'
    },
    {
      name: 'Status',
      style: 'width:15%; text-align:center'
    },
    {
      name: 'Action',
      style: 'width:55%;text-align:center'
    }
    ];

    ngOnInit(): void {

    }
    
    constructor(private shareService : SharedService){}

    viewCurrentRecord(event: any) {
      this.dialogBoxComponent?.toogleDialog();
      console.log('HERE ', event);
    }

    deleteCurrentRecord(event: any) {
      this.confirmationComponent?.confirm(event);
      console.log('HERE ', event);
    }

    updateCurrentRecord(event: any) {
      console.log('HERE ', event);
    }
}
