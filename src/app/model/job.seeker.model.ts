export interface JobSeeker {
    _id : string;
    firstName : string;
    lastName: string;
    contactNumber: string;
    profilePicture: string;
    qualification: string[];
    experience: string;
    jobApplyDate: Date;
    isProfileActive: boolean;
}