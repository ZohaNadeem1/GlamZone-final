import { Component } from '@angular/core';
import { ParlourFirebaseService } from './service/parlour.firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glamzone';

     constructor(private parlourService : ParlourFirebaseService){
      //  this.parlourService.getParlourById('vOM0sWFzhe78WfJLsKkd');
      // this.parlourService.getParlourByTitleAndUserId('');
      this.parlourService.getParlours();
      // this.parlourService.createParlour(null);
     }

}
