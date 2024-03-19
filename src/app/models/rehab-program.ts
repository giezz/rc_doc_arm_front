import {Patient} from "./patient";
import {Doctor} from "./doctor";
import {Module} from "./module";
import {ProgramForm} from "./program-form";

export class RehabProgram {
    id: number;
    patient: Patient;
    doctor: Doctor;
    forms: ProgramForm[]
    isCurrent: boolean;
    startDate: string;
    endDate: string;
    modules: Module[];

    constructor(id: number, patient: Patient, doctor: Doctor, forms: ProgramForm[], isCurrent: boolean, startDate: string, endDate: string, modules: Module[]) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.forms = forms;
        this.isCurrent = isCurrent;
        this.startDate = startDate;
        this.endDate = endDate;
        this.modules = modules;
    }
}
