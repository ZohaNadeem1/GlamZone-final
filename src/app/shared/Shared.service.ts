import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

dialogBoxStatus$ = new BehaviorSubject<boolean>(true); 

constructor() { }

}
