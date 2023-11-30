import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';
import { ApllicationConstant } from '../core/application.constants';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

       constructor() { }

       getBookings() : any {}

       getAllBookingByParlourId(parlourId : string) : any{}

       getBookingByIdAndParlourId(_id: string, parlourId: string) : any {}

       createBooking(booking: Booking){}

       updateBookingUserMessage(_id : string, userMessage : string ){}

}
