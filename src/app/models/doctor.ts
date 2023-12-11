export class Doctor {
  id: number
  doctorCode: number
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string

  constructor(id: number, doctorCode: number, firstName: string, middleName: string, lastName: string, email: string, phoneNumber: string) {
    this.id = id;
    this.doctorCode = doctorCode;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
