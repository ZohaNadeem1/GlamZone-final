import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ParlourFirebaseService } from '../service/parlour.firebase.service';
import { JobFirebaseService } from '../service/job.firebase.service';

@Injectable({
  providedIn: 'root'
})
export class JobsResolver implements Resolve<any>{
 
  constructor(private jobsFirebaseService: JobFirebaseService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<any> {
        return this.jobsFirebaseService.getJobs('ErkgK6XNMNN4hAjwUWZQ');
  }
  
}