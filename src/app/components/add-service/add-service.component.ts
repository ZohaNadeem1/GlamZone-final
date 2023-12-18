import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  @Input() visible : boolean = false;

  uploadedFiles: any[] = [];
  loading: boolean = false;
  defaultParlour : boolean = true;


  constructor(private messageService: MessageService, private cdr : ChangeDetectorRef) { }

  ngOnInit() {
  }

  
  onUpload(event: |any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

load() {
  this.loading = true;
  setTimeout(() => {
      this.loading = false
  }, 2000);
}

toogleDialog(){
  this.visible = !this.visible;
  this.cdr.detectChanges();
}

clear(){
   this.visible = false;
     
}

}
