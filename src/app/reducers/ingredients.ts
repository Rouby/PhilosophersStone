import { combineReducers, ActionReducer } from '@ngrx/store';
import { Action, ActionType } from '../actions/ingredients';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../model/ingredients';

import { ingredients } from '../data/ingredients';

interface State extends Array<Ingredient>
{

}

const reducer: ActionReducer<State> = (state: State = ingredients, action: Action) =>
{
    switch (action.type)
    {
        case ActionType.ADD_INGREDIENTS:
            {
                return state.filter(ing => !action.payload.find(ing2 => ing2.key === ing.key))
                    .concat(action.payload);
            }
        default:
            return state;
    }
};

export
{
    State as IngredientsState,
    reducer as ingredients
};

export function expandIngredients(ingredients$: Observable<Ingredient[]>)
{
    return function (state$: Observable<{ key: string; }[]>): Observable<Ingredient[]>
    {
        return state$
            .combineLatest<Ingredient[]>(ingredients$)
            .map(([inv, ings]) =>
                inv.map(i1 => Object.assign({}, i1, ings.find(i2 => i1.key === i2.key))))
    }
};