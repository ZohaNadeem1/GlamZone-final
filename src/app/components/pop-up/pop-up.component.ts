import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() modalId ?: string;
  @Input()  modalTitle?: string;
  @Input() service: any;

  reserveService: boolean = false;
  date: Date[] | undefined;
  contactNumber ?: string;
  phoneNumber !: string;
  userName ?: string;
  
  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }
  
  
  constructor() { 
  }

  ngOnInit() {
  }

  showBookingDialog(){
      this.reserveService = !this.reserveService;
  }

}
