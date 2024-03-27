import {Form} from "./form";

export class ProgramFormResult {
    id: number;
    form: Form
    typeId: number;
    finishedAt: string;
    score: number;
    interpretation: string;

    constructor(id: number, form: Form, typeId: number, finishedAt: string, score: number, interpretation: string) {
        this.id = id;
        this.form = form;
        this.typeId = typeId;
        this.finishedAt = finishedAt;
        this.score = score;
        this.interpretation = interpretation;
    }
}
