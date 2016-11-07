import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { AttachedEffect, SomeEffectsOf } from '../model/ingredients';

import { Rolltable, reduceEffect } from './reduceEffect';

@Component({
    selector: 'app-rolltables',
    templateUrl: './rolltables.component.html',
    styleUrls: ['./rolltables.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolltablesComponent implements OnInit
{
    @Input() effect: AttachedEffect;

    instruction: string;
    tables: Rolltable[] = [];
    primaryTable: Rolltable;

    constructor() { }

    ngOnInit()
    {
        const { text, tables, primaryTable } = reduceEffect(this.effect, {});
        this.instruction = text;
        this.tables = tables;
        this.primaryTable = primaryTable;
    }

    rollOnTables()
    {
        this.tables.forEach(t => t.reset());
        this.primaryTable.roll();
    }

}
