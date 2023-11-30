import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobFirebaseService {

      constructor() { }

      getJobs() : any {} 

      getJobById(_id : string) : any {}

      getJobByIdAndParlourId(_id : string, parlourId : string) : any {}  

      createJob(job : Job) : any {}

      updateJob(id: string, job : Job){} 

}
