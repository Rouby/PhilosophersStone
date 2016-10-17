import { Action } from '@ngrx/store';
import { type } from './util';

import { Ingredient } from '../model/ingredients';

export const ActionType = {
    ADD_INGREDIENTS:            type('Ingredients', 'Add ingredients')
};

export class AddIngredientsAction implements Action
{
    type = ActionType.ADD_INGREDIENTS;
    payload: Ingredient[];

    constructor(...payload: Ingredient[]) { this.payload = payload; }
}

export type Action = AddIngredientsAction;