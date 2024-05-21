export class HospitalizationHistory {
    id: number
    muCode: number
    doctorCode: number
    startDate: string
    endDate: string
    hospData: string

    constructor(id: number, muCode: number, doctorCode: number, startDate: string, endDate: string, hospData: string) {
        this.id = id;
        this.muCode = muCode;
        this.doctorCode = doctorCode;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hospData = hospData;
    }
}
