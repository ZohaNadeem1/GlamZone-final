import { Injectable } from '@angular/core';
import { Firestore, getDocs, collection, query, where, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OfferedService {

constructor(private fireStore : Firestore) { }

async getServicesByParlourId(parlourId : string | undefined) : Promise<any>{
       const collectionRef = collection(this.fireStore,'services'); 
       const queryByParlourId = query(collectionRef, where('parlourId','==', parlourId), where('isServiceActive','==', true))
       const docs = await getDocs(queryByParlourId);
       return docs;     
}

}
