export class Form {
    id: number;
    name: string;
    description: string;
    scale: string;

    constructor(id: number, name: string, description: string, scale: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.scale = scale;
    }
}
