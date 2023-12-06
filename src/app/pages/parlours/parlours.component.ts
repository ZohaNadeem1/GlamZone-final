import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parlour } from 'src/app/model/parlour.model';
import { ParlourFirebaseService } from 'src/app/service/parlour.firebase.service';

@Component({
  selector: 'app-parlours',
  templateUrl: './parlours.component.html',
  styleUrls: ['./parlours.component.css']
})
export class ParloursComponent implements OnInit {

  allParlours : Parlour[] = [];
 
  constructor(private route : ActivatedRoute) {
    
   }


  ngOnInit() {
    const data = this.route.snapshot.data['parlours'];
    data.forEach((parlour: any ) => {
                                     let parlourInfo : Parlour = {
                                       _id: parlour.id,
                                       businessTitle: parlour.data()['businessTitle'],
                                       businessPicture: parlour.data()['businessPicture'],
                                       businessContact: parlour.data()['businessContact'],
                                       userId: parlour.data()['userId'],
                                       businessSlogan: parlour.data()['businessSlogan'],
                                       businessShortDescription: parlour.data()['businessShortDescription'],
                                     };
                                    this.allParlours.push(parlourInfo);
                                    }); 
    console.log(this.route.snapshot.data['parlours']);
  }

}
