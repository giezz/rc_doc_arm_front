import {inject, Injectable} from '@angular/core';
import {TuiTreeLoader} from "@taiga-ui/kit";
import {IcfCategory} from "../../../models/icf-category";
import {Observable} from "rxjs";
import {IcfService} from "../../../services/icf.service";

@Injectable()
export class TreeLoaderService implements TuiTreeLoader<IcfCategory> {

    private icfService: IcfService = inject(IcfService);

    hasChildren(icfCategory: IcfCategory): boolean {
        return icfCategory.hasChildren!;
    }

    loadChildren(item: IcfCategory): Observable<IcfCategory[]> {
        return this.icfService.getChildren(item.code);
    }

}
