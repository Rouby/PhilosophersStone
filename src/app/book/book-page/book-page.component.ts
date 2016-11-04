import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit
{
    @Input() index: number;
    @Input() turned: boolean;
    @Input() heading: string;

    @HostBinding('style.z-index') zIndex: number;
    @HostBinding('style.transform') get transform() { return `rotateY(${this.turned ? -180 : 0}deg)`; }

    @Output() turnPage = new EventEmitter<void>();

    constructor() { }

    ngOnInit()
    {
    }

}
