import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../model/ingredients';

@Component({
    selector: 'app-brewing-kettle',
    templateUrl: './brewing-kettle.component.html',
    styleUrls: ['./brewing-kettle.component.css']
})
export class BrewingKettleComponent implements OnInit
{
    @Input() ingredients: Ingredient[];
    @Output() removeIngredient = new EventEmitter<{ ingredient: Ingredient; index: number; }>();

    constructor() { }

    ngOnInit()
    {
    }

    removeIngredient$(ingredient)
    {
        this.removeIngredient.next({
            ingredient,
            index: this.ingredients.indexOf(ingredient)
        });
    }

}
