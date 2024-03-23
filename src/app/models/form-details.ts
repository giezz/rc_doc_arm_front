import {Form} from "./form";
import {Question} from "./question";

export class FormDetails {
    form: Form;
    questions: Question[];

    constructor(form: Form, questions: Question[]) {
        this.form = form;
        this.questions = questions;
    }
}
