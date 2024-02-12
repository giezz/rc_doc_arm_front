import {Patient} from "./patient";
import {Doctor} from "./doctor";
import {Module} from "./module";
import {Form} from "./form";

export class RehabProgram {
  id: number;
  patient: Patient;
  doctor: Doctor;
  startForm: Form;
  endForm: Form;
  isCurrent: boolean;
  startDate: string;
  endDate: string;
  modules: Module[];

  constructor(id: number, patient: Patient, doctor: Doctor, startForm: Form, endForm: Form, isCurrent: boolean, startDate: string, endDate: string, modules: Module[]) {
    this.id = id;
    this.patient = patient;
    this.doctor = doctor;
    this.startForm = startForm;
    this.endForm = endForm;
    this.isCurrent = isCurrent;
    this.startDate = startDate;
    this.endDate = endDate;
    this.modules = modules;
  }
}
