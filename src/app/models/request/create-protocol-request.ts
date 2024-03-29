export class CreateProtocolRequest {
    modulesFormsResults: string;
    programFormsResults: string;
    result: string;
    recommendations: string;
    diagnosis: string

    constructor(modulesFormsResults: string, programFormsResults: string, result: string, recommendations: string, diagnosis: string) {
        this.modulesFormsResults = modulesFormsResults;
        this.programFormsResults = programFormsResults;
        this.result = result;
        this.recommendations = recommendations;
        this.diagnosis = diagnosis;
    }
}
