import {Form} from "./form";

export class ProgramForm {
    id: number;
    form: Form;
    typeId: number;
    finishedAt: string;
    score: number;

    constructor(id: number, form: Form, typeId: number, finishedAt: string, score: number) {
        this.id = id;
        this.form = form;
        this.typeId = typeId;
        this.finishedAt = finishedAt;
        this.score = score;
    }
}
