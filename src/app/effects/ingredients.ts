import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { routerActions } from '@ngrx/router-store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

// import {} from '../actions/ingredients';

@Injectable()
export class IngredientsEffects
{
    constructor(private actions$: Actions) { }

    // @Effect()
    // loadDefaultIngredients$: Observable<Action> = this.actions$
    //     .ofType('[Router] Update Location')
    //     .switchMap(action =>
    //     {
    //         console.log(action);
    //         return Observable.of({
    //             type: '[Inventory] Add ingredient',
    //             payload: { key: 'any', count: 1 }
    //         });
    //     });
}