import {Patient} from "./patient";

export class PageablePatients {
    content: Patient[];
    pageNumber: number
    pageSize: number
    totalElements: number
}
