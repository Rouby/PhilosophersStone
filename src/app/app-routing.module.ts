import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inventory',
        pathMatch: 'full'
    },
    {
        path: 'inventory',
        component: InventoryComponent
    },
    {
        path: 'ingredients',
        component: IngredientsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class PhilosophersStoneRoutingModule { }
