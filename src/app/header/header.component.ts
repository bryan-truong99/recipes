import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output() navClicked = new EventEmitter<string>();

    collapsed = true;

    onClick(link: string) {
        this.navClicked.emit(link);
    }
};