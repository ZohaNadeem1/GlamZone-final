import { Parlour } from "./parlour.model";

export interface User {
       _id : string;
       firstName: string;
       lastName: string;
       contactNumber:string;
       profilePicture?:string;
       email:string;
       password?: string;
       parlours?: Parlour[];
       isUserActive?: boolean;
}