import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SharedService } from 'src/app/shared/Shared.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  
  @Input() viewDetails ?: boolean;
  
  visible = false;
  loading: boolean = false;
  title ?: string;
   
  constructor(private cdr: ChangeDetectorRef, private messageService: MessageService) {
  }
  
  ngOnInit() {
  
  }
  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
}

   toogleDialog(){
     this.visible = !this.visible;
     this.viewDetails;
     this.title = this.viewDetails ? 'View Service Details' : 'Update Service';
     this.cdr.detectChanges();
   }
   
   load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
} 
  
}
