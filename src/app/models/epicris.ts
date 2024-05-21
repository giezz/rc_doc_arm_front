export class Epicris {
    id: number;
    diagnosisCode: number;
    creationDate: string;
    epicrisisiData: string;

    constructor(id: number, diagnosisCode: number, creationDate: string, epicrisisiData: string) {
        this.id = id;
        this.diagnosisCode = diagnosisCode;
        this.creationDate = creationDate;
        this.epicrisisiData = epicrisisiData;
    }
}
