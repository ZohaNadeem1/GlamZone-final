import { Injectable } from '@angular/core';
import { Parlour } from '../model/parlour.model';
import { Firestore, collection, doc,  getDoc, getDocs, query, where, addDoc, orderBy, limit, startAfter, DocumentData, QuerySnapshot} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ParlourFirebaseService {

  constructor(private firestore: Firestore) { }

  async getParlours() : Promise<QuerySnapshot<DocumentData, DocumentData>> {
    const queryRef =  query(collection(this.firestore, 'parlour'), orderBy('title'), limit(3))
    return  await getDocs(queryRef);
  } 
  
  async getParloursByPagination(start : number) : Promise<any> {
    const queryRef =  query(collection(this.firestore, 'parlour'), orderBy('title'), startAfter(start), limit(3))
    return await getDocs(queryRef);
  } 

   getParlourById(_id : string) : any {
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
