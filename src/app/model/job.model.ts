import { Parlour } from "./parlour.model";
import { User } from "./user.model ";

export interface Job {
       _id : string;
       jobTitle: string;
       jobDescription: string;
       jobCreationDate: Date;
       jobExpirationDate: Date;
       parlourId?: string;
       usersApplied?: User[];
       parlour?: Parlour;
       isJobActive?: boolean;
}