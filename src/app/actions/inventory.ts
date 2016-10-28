import { Action } from '@ngrx/store';
import { type } from './util';

export const ActionType = {
    ADD_INGREDIENT:                  type('Inventory', 'Add ingredient'),
    REMOVE_INGREDIENT:               type('Inventory', 'Remove ingredient'),
    ADD_INGREDIENT_TO_KETTLE:        type('Inventory', 'Add ingredient to kettle'),
    REMOVE_INGREDIENT_FROM_KETTLE:   type('Inventory', 'Remove ingredient from kettle'),
};

export class AddIngredientAction implements Action
{
    type = ActionType.ADD_INGREDIENT;
    payload: { key: string; count: number; };

    constructor(key: string, count: number = 1) { this.payload = { key, count }; }
}

export class RemoveIngredientAction implements Action
{
    type = ActionType.REMOVE_INGREDIENT;
    payload: { key: string; count: number; };

    constructor(key: string, count: number = 1) { this.payload = { key, count }; }
}

export class AddIngredientToKettleAction implements Action
{
    type = ActionType.ADD_INGREDIENT_TO_KETTLE;
    payload: { key: string; };

    constructor(key: string, count: number = 1) { this.payload = { key }; }
}

export class RemoveIngredientFromKettleAction implements Action
{
    type = ActionType.REMOVE_INGREDIENT_FROM_KETTLE;
    payload: { key: string; index: number; };

    constructor(key: string, index: number) { this.payload = { key, index }; }
}

export type Action = AddIngredientAction
    | RemoveIngredientAction
    | AddIngredientToKettleAction
    | RemoveIngredientFromKettleAction;