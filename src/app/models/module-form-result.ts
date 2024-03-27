import {Form} from "./form";

export class ModuleFormResult {
    id: number;
    form: Form
    moduleName: string;
    finishedAt: string;
    score: number;
    interpretation: string;

    constructor(id: number, form: Form, moduleName: string, finishedAt: string, score: number, interpretation: string) {
        this.id = id;
        this.form = form;
        this.moduleName = moduleName;
        this.finishedAt = finishedAt;
        this.score = score;
        this.interpretation = interpretation;
    }
}
