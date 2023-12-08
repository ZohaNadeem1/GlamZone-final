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
  selectedService ?: Service;

  constructor(private offeredService: OfferedService ,private activeRoute : ActivatedRoute) {
  
  }

  getService(service : Service){
        this.selectedService = service;
        this.selectedService['parlour'] = this.parlourDetails;
  }
  ngOnInit() {
     
  const data = this.activeRoute.snapshot.data['parlourDetails'];
  this.parlourDetails = data.data();

   this.offeredService.getServicesByParlourId(data.id).then(result => {
        result.forEach((result : any) => this.parlourOfferingServices.push(result.data()));
   });
  
}

}
