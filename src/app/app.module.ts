import 'rxjs/rx';

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
import { BrewingKettleComponent } from './brewing-kettle/brewing-kettle.component';
import { DescribePipe } from './ingredients/describe.pipe';
import { MarkdownComponent } from './markdown/markdown.component';
import { BookComponent } from './book/book.component';
import { BookPageComponent } from './book/book-page/book-page.component';

import { Injectable } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ExplainEffectPipe } from './inventory/explain-effect.pipe';

@Injectable()
export class AppGestureConfig extends HammerGestureConfig { }

@NgModule({
    declarations: [
        AppComponent,
        InventoryComponent,
        IngredientsComponent,
        RolltablesComponent,
        RangePipe,
        BrewingKettleComponent,
        DescribePipe,
        MarkdownComponent,
        BookComponent,
        BookPageComponent,
        ExplainEffectPipe
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
    providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: AppGestureConfig }],
    bootstrap: [AppComponent]
})
export class AppModule { }
