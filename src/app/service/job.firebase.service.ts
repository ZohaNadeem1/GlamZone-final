import { Injectable, OnInit } from '@angular/core';
import { Job } from '../model/job.model';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class JobFirebaseService implements OnInit {

      collectionRef ?: any;
      
      constructor(private firestore : Firestore) { 

        this.collectionRef = collection(this.firestore, 'jobs');
      }

      ngOnInit(): void {
      }
 
      async getJobs(parlourId : string | undefined  = undefined) : Promise<any> {
           if(parlourId != undefined){   
              const queryRefByParlourId = query(this.collectionRef, where('parlourId','==', parlourId), where('isJobActive', '==', true));
              const docRefs = await getDocs(queryRefByParlourId);
              return docRefs;
           }
           else{
              const docRefs = await getDocs(this.collectionRef);
              return docRefs;
           }
      } 

      getJobById(_id : string) : any {}

      getJobByIdAndParlourId(_id : string, parlourId : string) : any {}  

      createJob(job : Job) : any {}

      updateJob(id: string, job : Job){} 

}
