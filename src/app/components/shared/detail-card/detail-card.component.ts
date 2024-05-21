import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-detail-card',
    templateUrl: './detail-card.component.html',
    styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
    @Input()
    heading: string;

    @Input()
    padding: boolean = true;

    @Input()
    border: boolean = true;

    @Input()
    boxShadow: boolean = true;

}
