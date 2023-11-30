import { Parlour } from "./parlour.model";

export interface Service {
       _id : string;
       title: string;
       description: string;
       price: Number;
       serviceCategories: string[];
       servicePicture?: string[];
       serviceStartDate: Date;
       serviceEndDate: Date;
       parlour?: Parlour;
       parlourId?: string;
       isServiceActive?: boolean;
}