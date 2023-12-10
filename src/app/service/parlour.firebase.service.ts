import { Injectable } from '@angular/core';
import { Parlour } from '../model/parlour.model';
import { Firestore, collection, doc,  getDoc, getDocs, query, where, addDoc, orderBy, limit, startAfter, DocumentData, QuerySnapshot} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParlourFirebaseService {
   
  lastParlourVisible$ : BehaviorSubject<any> = new BehaviorSubject<any>(false);
  hasMoreParlours = false;
  pageSize = 2;
  totalCurrentCountOfParlours = new BehaviorSubject<number>(0);
  currentSize = 0;

  constructor(private firestore: Firestore) { }

  async getParlours() : Promise<QuerySnapshot<DocumentData, DocumentData>> {
    this.currentSize = (await getDocs(collection(this.firestore, 'parlour'))).size;
    const queryRef =  query(collection(this.firestore, 'parlour'), orderBy('parlourCreatedAt'), limit(this.pageSize))
    const snapshotData =  await getDocs(queryRef);
    this.totalCurrentCountOfParlours.next(this.currentSize-1);
    if(snapshotData.size > 0){
      this.lastParlourVisible$.next(snapshotData.docs[snapshotData.size -1]);
      this.hasMoreParlours = snapshotData.size == this.pageSize;
    }
    else{
      this.hasMoreParlours = false;
    }
    return snapshotData;
  } 
  
  async getParloursByPagination(start : number) : Promise<any> { 
    const queryRef =  query(collection(this.firestore, 'parlour'), orderBy('parlourCreatedAt'), startAfter(start), limit(this.pageSize))
    const snapshotData =  await getDocs(queryRef);
    if(snapshotData.size > 0){
      this.lastParlourVisible$.next(snapshotData.docs[snapshotData.size -1]);
      this.totalCurrentCountOfParlours.next(this.currentSize += snapshotData.size-1);
      this.hasMoreParlours = snapshotData.size == this.pageSize;
    }
    else{
      this.hasMoreParlours = false;
    }
    return snapshotData;
  } 

   getParlourById(_id : string | undefined) : any {
       const docRef =  doc(collection(this.firestore, 'parlour'), _id,);           
       return getDoc(docRef);
  }

  async getParlourByTitleAndUserId(title : string) : Promise<any> { 
          const queryByTitle =  query(  collection(this.firestore, 'parlour'), where('title', '==', 'glamour2'), where('userId', '==', '321') );     
          const snapshotData =  await getDocs(queryByTitle);
          return snapshotData;
  }

  createParlour(parlour : any) : any{
          addDoc(collection(this.firestore, 'parlour'),parlour).then(() => {
                console.log('Parlour has been created successfully')
          })
          .catch(error => console.log(error));
   }
  
  updateParlour(_id : string, parlourInfo : any){}

}
