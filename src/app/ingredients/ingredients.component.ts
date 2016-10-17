import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from '../reducers';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit
{
    ingredients = this.store
        .select(s => s.ingredients)
        .map(ings => ings.map(ing => Object.assign({}, ing, { tables: {} })));

    constructor(private store: Store<State>) { }

    ngOnInit()
    {
    }

}
