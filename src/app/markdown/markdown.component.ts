import { Component, AfterViewInit, ElementRef } from '@angular/core';

import * as marked from 'marked';

@Component({
    selector: '[app-markdown]',
    template: '<ng-content></ng-content>'
})
export class MarkdownComponent implements AfterViewInit 
{
    private text: string;

    constructor(private element: ElementRef) { }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
        this.text = this.element.nativeElement.innerHTML
        this.element.nativeElement.innerHTML = marked(this.text);
    }

}
