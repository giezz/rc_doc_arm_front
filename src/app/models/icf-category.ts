export class IcfCategory {
    code: string;
    name: string;
    description: string;
    hasChildren: boolean | null;

    constructor(code: string, name: string, description: string, hasChildren: boolean | null) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.hasChildren = hasChildren;
    }
}
