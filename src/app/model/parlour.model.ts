import { Booking } from "./booking.model";

export interface Parlour {
       _id ?: string;
       businessTitle: string;
       businessSlogan?: string;
       coverPicture?: string;
       businessPicture?: string;
       businessContact: string;
       address?: string[];
       latitude?: string;
       longigtude?: string;
       gallaryPics?: string[];
       userId: string;
       bookings?: Booking[];
       isParlourActive?: boolean;
}