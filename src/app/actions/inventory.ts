import { Action } from '@ngrx/store';
import { type } from './util';

export const ActionType = {
    ADD_INGREDIENT:             type('Inventory', 'Add ingredient')
};

export class AddIngredientAction implements Action
{
    type = ActionType.ADD_INGREDIENT;
    payload: { key: string; count: number; };

    constructor(key: string, count: number = 1) { this.payload = { key, count }; }
}

export type Action = AddIngredientAction;