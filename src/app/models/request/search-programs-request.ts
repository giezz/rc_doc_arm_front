export class SearchProgramsRequest {
    firstName: string;
    middleName: string;
    lastName: string;
    startDateForm: string | null;
    startDateTo: string | null;
    endDateFrom: string | null;
    endDateTo: string | null;
    isCurrent: boolean | null;

    constructor(firstName: string, middleName: string, lastName: string, startDateForm: string | null, startDateTo: string | null, endDateFrom: string | null, endDateTo: string | null, isCurrent: boolean | null) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.startDateForm = startDateForm;
        this.startDateTo = startDateTo;
        this.endDateFrom = endDateFrom;
        this.endDateTo = endDateTo;
        this.isCurrent = isCurrent;
    }
}
