import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ContentChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookPageComponent } from './book-page/book-page.component';

import * as _ from 'lodash';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit
{
    currentPage: number = 0;
    contentChunks: { heading: string; page: number; }[][] = [[]];
    initializedPages: BookPageComponent[] = [];

    @ViewChildren(BookPageComponent) internalPages: QueryList<BookPageComponent>;
    @ContentChildren(BookPageComponent) pages: QueryList<BookPageComponent>;

    constructor() { }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
        this.internalPages.changes.startWith(this.internalPages)
            .combineLatest(this.pages.changes.startWith(this.pages), (p1, p2) => p1.toArray().concat(p2.toArray()))
            .subscribe(chg => setTimeout(() => this.updatePages(chg)));
    }

    updatePages(pages: BookPageComponent[])
    {
        const ENTRIES_PER_CHUNK = 8;

        let contentChunk = this.contentChunks[this.contentChunks.length - 1];
        pages.forEach((page, pageIndex) =>
        {
            page.index = pageIndex;
            page.zIndex = pages.length - pageIndex;
            if (this.initializedPages.indexOf(page) === -1)
            {
                this.initializedPages.push(page);
                page.turnPage.subscribe(() => this.turnToPage(null, page.index + (page.turned ? -1 : 2)));
                // {
                //     const pages = this.internalPages.toArray()
                //         .concat(this.pages.toArray());
                //     const direction = page.turned ? -1 : 1;
                //     this.currentPage += 2 * direction;

                //     pages.forEach(p =>
                //         p.zIndex = pages.length - Math.abs(p.index - this.currentPage)
                //         + (direction === 1 && p.index < this.currentPage ? 3 : 0));

                //     const otherPage = pageIndex % 2 ? pages[pageIndex - 1] : pages[pageIndex + 1];
                //     page.turned = otherPage.turned = !page.turned;
                // });
            }
            if (page.heading)
            {
                const entry = _.flatten(this.contentChunks).find(e => e.heading === page.heading);
                if (!entry)
                {
                    contentChunk.push({ heading: page.heading, page: pageIndex + 1 });
                    if (contentChunk.length >= ENTRIES_PER_CHUNK)
                        this.contentChunks.push(contentChunk = []);
                }
                else
                    entry.page = pageIndex + 1;
            }
        });
    }

    turnToPage(event, pageNum: number)
    {
        event && event.preventDefault();
        event && event.stopPropagation();

        const pages = this.internalPages.toArray()
            .concat(this.pages.toArray());        
        const page = Math.min(pageNum - (pageNum % 2), pages.length - (pages.length % 2));

        console.log(page);

        const direction = Math.sign(page - this.currentPage);
        this.currentPage = page;

        pages.forEach((p, _, pages) =>
            {
                p.turned = p.index < this.currentPage;
                p.zIndex = pages.length - Math.abs(p.index - this.currentPage)
                    + (direction === 1 && p.index < this.currentPage ? 3 : 0)
            });
    }

}
