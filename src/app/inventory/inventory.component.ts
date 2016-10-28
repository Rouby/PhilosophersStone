import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Store } from '@ngrx/store';

import { Ingredient } from '../model/ingredients';

import { State } from '../reducers';
import { IngredientsState, expandIngredients } from '../reducers/ingredients';

import
{
    RemoveIngredientAction,
    AddIngredientToKettleAction,
    RemoveIngredientFromKettleAction
} from '../actions/inventory';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit
{
    ingredients$ = this.store
        .map(s => s.inventory.ingredients)
        .let(expandIngredients(this.store.map(s => s.ingredients)));

    ingredientsInKettle$ = this.store
        .map(s => s.inventory.kettle.ingredients)
        .map(keys => keys.map(key => ({ key })))
        .let(expandIngredients(this.store.map(s => s.ingredients)));


    constructor(private store: Store<State>) { }

    ngOnInit()
    {
    }

    addIngredientToKettle(ingredient)
    {
        this.store.dispatch(new AddIngredientToKettleAction(ingredient.key));
    }

    removeIngredientFromKettle({ingredient, index})
    {
        this.store.dispatch(new RemoveIngredientFromKettleAction(ingredient.key, index));
    }

    removeIngredient(ingredient)
    {
        this.store.dispatch(new RemoveIngredientAction(ingredient.key));
    }

}
