export class SearchPatientsRequest {
    firstName: string;
    middleName: string;
    lastName: string;
    status: number[];
    gender: string | null;
    birthDate: string;

    constructor(firstName: string, middleName: string, lastName: string, status: number[], gender: string | null, birthDate: string) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.status = status;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}
