import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import { State } from '../reducers';
import { AddIngredientAction } from '../actions/inventory';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit
{
    ingredients = this.store
        .select(s => s.ingredients)
        .map(ings => ings.map(ing => Object.assign({ tables: {} }, ing)))
        .map(ings => _.chunk(ings, 2));
    
    activePage: number = 0;
    direction: number = 1;

    constructor(private store: Store<State>) { }

    ngOnInit()
    {
    }

    addToInventory(ingredient)
    {
        this.store.dispatch(new AddIngredientAction(ingredient.key));
    }
}
