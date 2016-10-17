import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { localStorageSync } from 'ngrx-store-localstorage';

import { routerReducer as router } from '@ngrx/router-store';
import { ingredients, IngredientsState } from './ingredients';
import { inventory, InventoryState } from './inventory';

export interface State
{
    inventory: InventoryState;
    ingredients: IngredientsState;
}

const reducers = {
    router,
    inventory,
    ingredients
};

export const reducer = compose(
    localStorageSync([
        'inventory',
        // 'ingredients'
    ], true), combineReducers)(reducers);