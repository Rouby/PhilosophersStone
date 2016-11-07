import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/core';
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
    RemoveIngredientFromKettleAction,
    ChangePotionBaseInKettleAction,
    BrewPotionAction
} from '../actions/inventory';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css'],
    animations: [
        trigger('potionDetails', [
            state('hidden', style({ bottom: 0, right: 0, display: 'none', 'border-color': 'rgba(0,0,0,0)' })),
            state('visible', style({ })),
            transition('hidden => visible', [
                animate(250)
            ]),
            transition('visible => hidden', [
                animate(250)
            ])
        ]),
        trigger('potionDetailsIcon', [
            state('hidden', style({ })),
            state('visible', style({ transform: 'scale(1.3)', margin: '10px 5px' })),
            transition('hidden => visible', [
                animate(250)
            ]),
            transition('visible => hidden', [
                animate(250)
            ])
        ]),
        trigger('potionDetailsText', [
            state('hidden', style({ opacity: 0 })),
            state('visible', style({ opacity: 1 })),
            transition('hidden => visible', [
                animate(250)
            ]),
            transition('visible => hidden', [
                animate(250)
            ])
        ])
    ]
})
export class InventoryComponent implements OnInit
{
    potions$ = this.store
        .map(s => s.inventory.potions);

    ingredients$ = this.store
        .map(s => s.inventory.ingredients)
        .let(expandIngredients(this.store.map(s => s.ingredients)));

    potionBaseInKettle$ = this.store
        .map(s => s.inventory.kettle.base);

    ingredientsInKettle$ = this.store
        .map(s => s.inventory.kettle.ingredients)
        .map(keys => keys.map(key => ({ key })))
        .let(expandIngredients(this.store.map(s => s.ingredients)));

    hintDropzone: boolean;

    selectedPotion;

    constructor(private store: Store<State>) { }

    ngOnInit()
    {
    }

    addIngredientToKettle(key)
    {
        this.store.dispatch(new AddIngredientToKettleAction(key));
        this.hintDropzone = false;
    }

    removeIngredientFromKettle({ingredient, index})
    {
        this.store.dispatch(new RemoveIngredientFromKettleAction(ingredient.key, index));
    }

    changePotionBaseInKettle(base)
    {
        this.store.dispatch(new ChangePotionBaseInKettleAction(base));
    }

    removeIngredient(ingredient)
    {
        this.store.dispatch(new RemoveIngredientAction(ingredient.key));
    }

    startIngredientDrag(event: DragEvent, key: string)
    {
        this.hintDropzone = true;
        event.dataTransfer.setData('text/ingredient', key);
    }

    endIngredientDrag(event: DragEvent)
    {
        this.hintDropzone = false;
    }

    brewPotionFromKettle(potion)
    {
        this.store.dispatch(new BrewPotionAction(potion));
    }
}
