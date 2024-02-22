import {ModuleForm} from "./module-form";
import {ModuleExercise} from "./module-exercise";

export class Module {
  id: number;
  name: string;
  finishedAt: string;
  forms: ModuleForm[];
  exercises: ModuleExercise[];
}
