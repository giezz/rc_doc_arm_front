import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TuiDialogContext} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'app-module-edit-dialog',
  templateUrl: './module-edit-dialog.component.html',
  styleUrls: ['./module-edit-dialog.component.css']
})
export class ModuleEditDialogComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,
  ) {}

  ngOnInit(): void {
    console.log("ModuleEditDialogComponent");
  }

  ngOnDestroy(): void {
    console.log("ModuleEditDialogComponent destroyed");
  }

  close(): void {
    this.context.completeWith(false);
  }

}
