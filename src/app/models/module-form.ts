import {Form} from "./form";

export class ModuleForm {
    id: number | null;
    form: Form;
    finishedAt: string | null;

    constructor(id: number | null, form: Form, finishedAt: string | null) {
        this.id = id;
        this.form = form;
        this.finishedAt = finishedAt;
    }
}
