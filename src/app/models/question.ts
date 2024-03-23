import {Variant} from "./variant";

export class Question {
    id: number;
    content: string;
    variants: Variant[];

    constructor(id: number, content: string, variants: Variant[]) {
        this.id = id;
        this.content = content;
        this.variants = variants;
    }
}
