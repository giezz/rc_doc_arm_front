import {Component, EventEmitter, inject, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IcfCategory} from "../../../models/icf-category";
import {TuiHandler} from "@taiga-ui/cdk";
import {TUI_TREE_LOADER, TUI_TREE_LOADING, TUI_TREE_START, TuiTreeService} from "@taiga-ui/kit";
import {TreeLoaderService} from "./tree-loader.service";
import {IcfService} from "../../../services/icf.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'app-icf',
    templateUrl: './icf.component.html',
    styleUrls: ['./icf.component.css'],
    providers: [
        TuiTreeService,
        {
            provide: TUI_TREE_START,
            useValue: {code: 'МКФ'}
        },
        {
            provide: TUI_TREE_LOADER,
            useClass: TreeLoaderService,
        },
    ],
})
export class IcfComponent implements OnInit, OnDestroy {

    @Input()
    asDialog: boolean = false;

    @Output()
    onAddCategoryButtonPressed = new EventEmitter<{category: IcfCategory, grade: string}>();
    addCategory(category: IcfCategory, grade: string) {
        this.onAddCategoryButtonPressed.emit({category, grade});
        this.gradeCategory.controls.grade.setValue('');
    }

    private icfService: IcfService = inject(IcfService);

    constructor(
        @Inject(TUI_TREE_LOADING) readonly loading: unknown,
        @Inject(TuiTreeService) readonly service: TuiTreeService<IcfCategory>,
    ) {
    }

    map = new Map<IcfCategory, boolean>;
    category: IcfCategory;
    categories: IcfCategory[] = []
    searchCategory = new FormGroup({
        category: new FormControl()
    })

    gradeCategory = new FormGroup({
        grade: new FormControl('', Validators.required)
    })

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    childrenHandler: TuiHandler<IcfCategory, readonly IcfCategory[]> = category =>
        this.service.getChildren(category);

    onToggled(item: IcfCategory): void {
        this.service.loadChildren(item);
    }

    inspectCategory(code: string, name: string, description: string) {
        this.category = new IcfCategory(code, name, description, null)
    }

    findCategory() {
        if (this.searchCategory.value.category.length > 0) {
            this.icfService.getByQuery(this.searchCategory.value.category).subscribe(
                {
                    next: value => {
                        this.categories = value;
                    }
                }
            )
        } else {
            this.categories = [];
        }
    }

}
