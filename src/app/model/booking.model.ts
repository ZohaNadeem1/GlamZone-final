export interface Booking {
       _id : string;
       userNumber: string;
       parlourId: string;
       serviceId: string;
       bookingDate: Date;
       bookingExpire: Date;
       isBookingActive: boolean;
}