import {Form} from "./form";
export class FormResult {
  id: number;
  form: Form;
  score: number;
  creationDate: Date;

  constructor(id: number, form: Form, score: number, creationDate: Date) {
    this.id = id;
    this.form = form;
    this.score = score;
    this.creationDate = creationDate;
  }
}
