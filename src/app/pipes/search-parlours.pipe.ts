import { ElementRef, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { Parlour } from '../model/parlour.model';
import { ParlourFirebaseService } from '../service/parlour.firebase.service';

@Pipe({
  name: 'searchParlours'
})
export class SearchParloursPipe implements PipeTransform  {

  
  constructor(private parlourFirebaseService : ParlourFirebaseService){}

  transform(value: any,  args : string ) : any {
    if(!value){
                  this.parlourFirebaseService.totalCurrentCountOfParlours.next(0);
                  return null;
                }

    if(!args){
      this.parlourFirebaseService.totalCurrentCountOfParlours.next(0);
                return value; 
              }
    
    args = args.toLowerCase();
    let results = value.filter((record : Parlour) => record.businessTitle?.includes(args.toLowerCase()) || record.businessContact?.includes(args.toLowerCase()));
    if(results.length > 0){
        //  this.parlourFirebaseService.totalCurrentCountOfParlours.next(results.length-1);
         return results 
    }
    else{
        this.parlourFirebaseService.totalCurrentCountOfParlours.next(0);
        return [{message:'No Record Found'}];
    }

  }

}
