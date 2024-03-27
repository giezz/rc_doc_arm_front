import {Form} from "./form";

export class ProgramForm {
    id: number;
    form: Form;
    typeId: number;
    finishedAt: string;

    constructor(id: number, form: Form, typeId: number, finishedAt: string) {
        this.id = id;
        this.form = form;
        this.typeId = typeId;
        this.finishedAt = finishedAt;
    }
}
