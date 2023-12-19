import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-edit-parlour',
  templateUrl: './edit-parlour.component.html',
  styleUrls: ['./edit-parlour.component.css']
})
export class EditParlourComponent implements OnInit {
  loading : boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  uploadedFiles: any[] = [];


  onUpload(event:UploadEvent | any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }


}
