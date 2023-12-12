import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/shared/Shared.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  
  visible = false;
  
  constructor(private cdr: ChangeDetectorRef) { }
    
  ngOnInit() {
    
  }

   toogleDialog(){
     this.visible = !this.visible;
     this.cdr.detectChanges();
   }
    
  
}
