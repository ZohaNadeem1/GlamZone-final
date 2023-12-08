import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebaseTimestamp',
})
export class FirebaseTimestampPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(timestamp: any, format: string = 'medium') : any {
    if (timestamp instanceof Date) {
      return this.datePipe.transform(timestamp, format);
    } else if (timestamp?.toDate instanceof Function) {
      // Assume timestamp is a Firebase Timestamp with a toDate() method
      const date = timestamp.toDate();
      return this.datePipe.transform(date, format);
    } else {
      return '';
    }
  }
}