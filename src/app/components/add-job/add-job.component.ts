import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @Input() visible: boolean = false;

  loading: boolean = false;

  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }



  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.visible = false;
      this.cdr.detectChanges()
    }, 2000);
  }

  toogleDialog() {
    this.visible = !this.visible;
    this.cdr.detectChanges();
  }

  clear() {
    this.visible = false;

  }

}
