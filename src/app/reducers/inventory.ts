import { combineReducers, ActionReducer } from '@ngrx/store';
import { Action, ActionType } from '../actions/inventory';

interface State
{
    ingredients: IngredientsState;
    kettle: KettleState;
}

interface IngredientsState extends Array<IngredientInInventory>
{

}

interface IngredientInInventory
{
    key: string;
    count: number;
}

interface KettleState
{
    base: string;
    ingredients: KettleIngredientsState;
}

interface KettleIngredientsState extends Array<string>
{

}

const ingredient: ActionReducer<IngredientInInventory> = (state: IngredientInInventory, action: Action) =>
{
    switch (action.type)
    {
        case ActionType.ADD_INGREDIENT:
        case ActionType.REMOVE_INGREDIENT_FROM_KETTLE:
            {
                const payload = action.payload as { key: string; count?: number; };
                if (payload.key === state.key)
                {
                    return Object.assign({}, state, { count: state.count + (payload.count || 1) });
                }

                return state;
            }
        case ActionType.REMOVE_INGREDIENT:
        case ActionType.ADD_INGREDIENT_TO_KETTLE:
            {
                const payload = action.payload as { key: string; count?: number; };
                if (payload.key === state.key)
                {
                    return Object.assign({}, state, { count: state.count - (payload.count || 1) });
                }

                return state;
            }
        default:
            return state;
    }
};

const ingredients: ActionReducer<IngredientsState> = (state: IngredientsState = [], action: Action) =>
{
    switch (action.type)
    {
        case ActionType.ADD_INGREDIENT:
        case ActionType.REMOVE_INGREDIENT:
        case ActionType.ADD_INGREDIENT_TO_KETTLE:
        case ActionType.REMOVE_INGREDIENT_FROM_KETTLE:
            {
                const payload = action.payload as { key: string; };
                if (state.find(ing => ing.key === payload.key))
                {
                    return state
                        .map(ing => ingredient(ing, action))
                        .filter(ing => ing.count > 0);
                }

                return state
                    .concat({ key: payload.key, count: 0 })
                    .map(ing => ingredient(ing, action))
                    .filter(ing => ing.count > 0);
            }
        default:
            return state;
    }
};

const kettleIngredients: ActionReducer<KettleIngredientsState> = (state: KettleIngredientsState = [], action: Action) =>
{
    switch (action.type)
    {
        case ActionType.ADD_INGREDIENT_TO_KETTLE:
            {
                const payload = action.payload as { key: string; };
                return [...state, payload.key];
            }
        case ActionType.REMOVE_INGREDIENT_FROM_KETTLE:
            {
                const payload = action.payload as { index: number; };
                return state.filter((_, idx) => idx !== payload.index);
            }
        default:
            return state;
    }
};

const reducer = combineReducers({
    ingredients,
    kettle: combineReducers({
        ingredients: kettleIngredients
    })
});

export
{
    State as InventoryState,
    reducer as inventory,
    IngredientInInventory
};