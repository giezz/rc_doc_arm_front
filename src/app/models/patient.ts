import {Status} from "./status";
import {Passport} from "./passport";

export class Patient {
  id: number
  patientCode: number
  firstName: string
  middleName: string
  lastName: string
  gender: string
  birthDate: Date
  deathDate: Date
  address: string
  phoneNumber: string
  workPlaceData: string
  bookmark: string
  snils: string
  polis: string
  patientStatus: Status
  passport: Passport


  constructor(id: number, patientCode: number, firstName: string, middleName: string, lastName: string, gender: string, birthDate: Date, deathDate: Date, address: string, phoneNumber: string, workPlaceData: string, bookmark: string, snils: string, polis: string, patientStatus: Status, passport: Passport) {
    this.id = id;
    this.patientCode = patientCode;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.workPlaceData = workPlaceData;
    this.bookmark = bookmark;
    this.snils = snils;
    this.polis = polis;
    this.patientStatus = patientStatus;
    this.passport = passport;
  }
}
