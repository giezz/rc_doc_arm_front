export class PageableResponse<T> {
    content: T[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
}
