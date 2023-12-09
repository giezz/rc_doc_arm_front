import {Status} from "./status";

export class Patient {
  id: number
  firstName: string
  middleName: string
  lastName: string
  gender: string
  birthDate: string
  patientStatus: Status

  constructor(id: number, firstName: string, middleName: string, lastName: string, gender: string, birthDate: string, patientStatus: Status) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthDate = birthDate;
    this.patientStatus = patientStatus;
  }
}
