import {Exercise} from "./exercise";

export class ModuleExercise {
    id: number | null;
    exercise: Exercise;
    blockId: number;
    finishedAt: string | null;

    constructor(id: number | null, exercise: Exercise, blockId: number, finishedAt: string | null) {
        this.id = id;
        this.exercise = exercise;
        this.blockId = blockId;
        this.finishedAt = finishedAt;
    }
}
