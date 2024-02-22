import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Module} from "../../../../models/module";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {ModuleEditDialogComponent} from "../../../../dialogs/module-edit-dialog/module-edit-dialog.component";
import {TuiDialogService} from "@taiga-ui/core";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-modules-block',
  templateUrl: './modules-block.component.html',
  styleUrls: ['./modules-block.component.css']
})
export class ModulesBlockComponent implements OnInit, OnDestroy {

  @Input("module")
  module: Module;

  @Input("index")
  index: number;

  private dialogService = inject(TuiDialogService);
  private injector: Injector = inject(Injector);

  private moduleEditDialog: Observable<String>;

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    console.log('RehabProgramDetailComponent');
    this.moduleEditDialog = this.dialogService.open<string>(
      new PolymorpheusComponent(ModuleEditDialogComponent, this.injector),
      {
        data: this.module.id,
        dismissible: false,
        closeable: true,
        size: 'page'
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('ModulesBlockComponent destroyed');
  }

  showModuleEditDialog(): void {
    const dialogSub$ = this.moduleEditDialog.subscribe();
    this.subscription.add(dialogSub$);
  }
}
