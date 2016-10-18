import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PhilosophersStoneRoutingModule } from './app-routing.module';

import { Store, StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers';

import * as Effects from './effects';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RolltablesComponent } from './rolltables/rolltables.component';
import { RangePipe } from './Rolltables/range.pipe';

@NgModule({
    declarations: [
        AppComponent,
        InventoryComponent,
        IngredientsComponent,
        RolltablesComponent,
        RangePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        PhilosophersStoneRoutingModule,

        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: true,
                position: 'right'
            })
        }),
        StoreLogMonitorModule,
        EffectsModule.run(Effects.IngredientsEffects)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
