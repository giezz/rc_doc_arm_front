import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Module} from "../../../../models/module";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {ModuleEditDialogComponent} from "../../../../dialogs/module-edit-dialog/module-edit-dialog.component";
import {TuiDialogService} from "@taiga-ui/core";
import {Subscription} from "rxjs";

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

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    console.log('RehabProgramDetailComponent');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('ModulesBlockComponent destroyed');
  }

  private readonly moduleEditDialog = this.dialogService.open<string>(
    new PolymorpheusComponent(ModuleEditDialogComponent, this.injector),
    {
      dismissible: false,
      closeable: true,
      size: 'page'
    },
  );

  showModuleEditDialog(): void {
    const dialogSub$ = this.moduleEditDialog.subscribe();
    this.subscription.add(dialogSub$);
  }
}
