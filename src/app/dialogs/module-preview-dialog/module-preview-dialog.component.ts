import {Component, Inject, inject, OnDestroy, OnInit} from '@angular/core';
import {ModuleService} from "../../services/module.service";
import {Module} from "../../models/module";
import {Subscription} from "rxjs";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";

@Component({
  selector: 'app-module-preview-dialog',
  templateUrl: './module-preview-dialog.component.html',
  styleUrls: ['./module-preview-dialog.component.css', '../../app.component.css']
})
export class ModulePreviewDialogComponent implements OnInit, OnDestroy {

    private moduleService: ModuleService = inject(ModuleService);

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<number, number>,
    ) {}

    module: Module;
    isLoaded: boolean = false;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        const sub$ = this.moduleService.getModuleById(this.data).subscribe(
            module => {
                this.module = module;
                this.isLoaded = true;
                console.log(this.module);
            }
        )
        this.subscription.add(sub$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get data(): number {
        return this.context.data
    }

}
