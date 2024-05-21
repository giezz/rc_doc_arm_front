export class CreateProtocolRequest {
    modulesFormsResults: string;
    programFormsResults: string;
    result: string;
    recommendations: string;
    diagnosis: string;
    isFinal: boolean;

    constructor(modulesFormsResults: string, programFormsResults: string, result: string, recommendations: string, diagnosis: string, isFinal: boolean) {
        this.modulesFormsResults = modulesFormsResults;
        this.programFormsResults = programFormsResults;
        this.result = result;
        this.recommendations = recommendations;
        this.diagnosis = diagnosis;
        this.isFinal = isFinal;
    }
}
