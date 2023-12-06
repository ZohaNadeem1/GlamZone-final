import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ParlourFirebaseService } from '../service/parlour.firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ParloursResolver implements Resolve<any>{
 
  constructor(private parlourFirebaseService: ParlourFirebaseService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<any> {
        return this.parlourFirebaseService.getParlours();
  }
  
}