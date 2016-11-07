import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Ingredient, PotionBase } from '../model/ingredients';
import { Potion } from '../model/potions';

import { Rolltable, reduceEffect } from '../rolltables/reduceEffect';

@Component({
    selector: 'app-brewing-kettle',
    templateUrl: './brewing-kettle.component.html',
    styleUrls: ['./brewing-kettle.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateY(0)', opacity: 1 })),
            transition('void => *', [
                style({ transform: 'translateY(-100%)', opacity: 0 }),
                animate(250)
            ]),
            transition('* => void', [
                animate(250, style({ transform: 'translateY(100%)', opacity: 0 }))
            ])
        ])
    ]
})
export class BrewingKettleComponent implements OnInit
{
    brewState: 'start' | 'brewing' | 'naming' = 'start';
    messages = [
        { start: 0, text: 'Consulting strange witch...' },
        { start: 25, text: 'Meassuring the temperature...' },
        { start: 50, text: 'Tossing ingredients into kettle...' },
        { start: 75, text: 'Wait for something to happen...' }
    ].sort((a, b) => b.start - a.start);

    potionName = new Subject<string>();
    countdown = new BehaviorSubject(0);
    countdown$ = this.countdown
        .switchMap(start =>
            Observable
                .timer(0, 10)
                .timeInterval()
                .pluck<number>('interval')
                .scan((acc, val) => acc + val)
                .map(i => start - i)
                .share()
                .let(source => source.takeUntil(source.skipWhile(t => t >= 0).skip(1)))
        )
        .share();
    countdownFrom$ = this.countdown.asObservable();
    countdownProgress$ = this.countdown$.withLatestFrom(this.countdownFrom$, (curr, max) => 100 - curr / max * 100);
    countdownFinished$ = this.countdown$.skip(1).filter(t => t <= 0);
    countdownMessages$ = this.countdownProgress$
        .map(p => this.messages.find(m => p >= m.start))
        .distinctUntilChanged()
        .map(msg => [msg]);
    potion$ = this.countdownFinished$
        .map(() => ({
            name: 'Unnamed potion',
            effects: this.ingredients.map(ing => reduceEffect(ing.effect, {}).primaryTable.roll())
                .reduce((agg, cur) => [...agg, ...cur]),
            visuals: this.ingredients.map(ing => ing.visuals)
                .reduce((agg, cur) => [...agg, ...cur]),
            color: '#f00'
        }))
        .share();

    @Input() ingredients: Ingredient[];
    @Input() potionBase: PotionBase;
    @Input() hintDropzone: boolean;
    @Output() addIngredient = new EventEmitter<string>();
    @Output() removeIngredient = new EventEmitter<{ ingredient: Ingredient; index: number; }>();
    @Output() changePotionBase = new EventEmitter<PotionBase>();
    @Output() brewPotion = this.potionName.withLatestFrom(this.potion$, (name, potion) => Object.assign({}, potion, { name }));

    constructor() { }

    ngOnInit()
    {
        this.potion$.subscribe(() => this.brewState = 'naming');
    }

    removeIngredient$(ingredient)
    {
        this.removeIngredient.next({
            ingredient,
            index: this.ingredients.indexOf(ingredient)
        });
    }

    dragIngredientOver(event: DragEvent)
    {
        event.dataTransfer.dropEffect = 'copy';
        event.preventDefault();
    }

    dropIngredient(event: DragEvent)
    {
        if (event.dataTransfer.getData('text/ingredient'))
        {
            event.preventDefault();
            this.addIngredient.next(event.dataTransfer.getData('text/ingredient'));
        }
    }

    setPotionBase(base)
    {
        this.changePotionBase.next(base);
    }

    startBrewing()
    {
        this.brewState = 'brewing';
        this.countdown.next(3000);
    }

    setPotionName(name)
    {
        this.brewState = 'start';
        this.potionName.next(name);
    }

}
