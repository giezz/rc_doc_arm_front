export class Passport {
  series: string
  number: string
  issued: string
  issuedDate: Date

  constructor(series: string, number: string, issued: string, issuedDate: Date) {
    this.series = series;
    this.number = number;
    this.issued = issued;
    this.issuedDate = issuedDate;
  }
}
