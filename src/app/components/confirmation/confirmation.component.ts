import { Component, OnInit } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}


  ngOnInit() {
  }

 public confirm(data : any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: (type : ConfirmEventType) => {
        switch (type) {
            case ConfirmEventType.REJECT:
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                break;
            case ConfirmEventType.CANCEL:
                this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                break;
        }
    }
    });
  }

}
