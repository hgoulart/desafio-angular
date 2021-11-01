import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit,Input } from '@angular/core';
import { faKey, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

    @Input() alertData: any;
    @Input() isOpen: any;

    faKey = faKey;
    faTimes = faTimes;
    constructor() { }

    ngOnInit(): void {
        this.isOpen = this.alertData.isOpen;
    }


    alertClose() {
        this.alertData.isOpen = false;
        this.isOpen = this.alertData.isOpen;
    }
}
