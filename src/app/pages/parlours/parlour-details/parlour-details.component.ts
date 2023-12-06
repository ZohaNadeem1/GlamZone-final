import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Parlour } from 'src/app/model/parlour.model';
import { Service } from 'src/app/model/service.model';
import { OfferedService } from 'src/app/service/offered.services.firebase.service';
import { ParlourFirebaseService } from 'src/app/service/parlour.firebase.service';

@Component({
  selector: 'app-parlour-details',
  templateUrl: './parlour-details.component.html',
  styleUrls: ['./parlour-details.component.css']
})
export class ParlourDetailsComponent implements OnInit {
  parlourDetails ?: Parlour;
  parlourOfferingServices : Service[] = [];

  constructor(private offeredService: OfferedService ,private activeRoute : ActivatedRoute) {
  
  }

  ngOnInit() {
     
  const data = this.activeRoute.snapshot.data['parlourDetails'];
  this.parlourDetails = data.data();

   this.offeredService.getServicesByParlourId(data.id).then(result => {
    console.log(data.id);
        result.forEach((result : any) => this.parlourOfferingServices.push(result.data()));
   });


  console.log(this.parlourDetails);
  
}

}
