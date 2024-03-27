import {Form} from "./form";

export class ModuleForm {
    id: number;
    moduleName: string;
    form: Form;
    finishedAt: string;

    constructor(id: number, moduleName: string, form: Form, finishedAt: string) {
        this.id = id;
        this.moduleName = moduleName;
        this.form = form;
        this.finishedAt = finishedAt;
    }
}
