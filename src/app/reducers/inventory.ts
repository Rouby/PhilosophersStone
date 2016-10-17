import { combineReducers, ActionReducer } from '@ngrx/store';
import { Action, ActionType } from '../actions/inventory';

interface State
{
    ingredients: IngredientsState;
}

interface IngredientsState extends Array<IngredientInInventory>
{

}

interface IngredientInInventory
{
    key: string;
    count: number;
}

const ingredients: ActionReducer<IngredientsState> = (state: IngredientsState = [], action: Action) =>
{
    switch (action.type)
    {
        case ActionType.ADD_INGREDIENT:
            {
                console.log('red');
                return (<any>Object).entries(state.reduce((aggr, curr) => { aggr[curr.key] = (aggr[curr.key] || 0) + curr.count; return aggr; }, { [action.payload.key]: action.payload.count })).map(([key, count]) => ({ key, count }));
            }
        default:
            return state;
    }
};

const reducer = combineReducers({ ingredients });

export
{
    State as InventoryState,
    reducer as inventory
};