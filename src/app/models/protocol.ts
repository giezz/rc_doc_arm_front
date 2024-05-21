export class Protocol {
    creationDate: string;
    scalesResult: string;
    rehabResult: string;
    recommendations: string;
    rehabDiagnosis: string;

    constructor(creationDate: string, scalesResult: string, rehabResult: string, recommendations: string, rehabDiagnosis: string) {
        this.creationDate = creationDate;
        this.scalesResult = scalesResult;
        this.rehabResult = rehabResult;
        this.recommendations = recommendations;
        this.rehabDiagnosis = rehabDiagnosis;
    }
}
