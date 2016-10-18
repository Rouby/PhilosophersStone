export interface Ingredient
{
    key: string;
    name: string;
    desc: string;
    obtainedFrom: string[];
    effect: AttachedEffect;
    reactions: Reaction[];
}

export interface Reaction
{
    otherIngredient: string;
    effects: AttachedEffect;
}

export type AttachedEffect = SingleEffect | OneEffectOf | SomeEffectsOf | AllEffectsOf;

interface BaseAttachedEffect
{
    weight?: number;
}    

export interface SingleEffect extends BaseAttachedEffect
{
    type: 'single',
    effect: string | null;
}

export interface OneEffectOf extends BaseAttachedEffect
{
    type: 'oneOf';
    effects: AttachedEffect[];
}

export interface SomeEffectsOf extends BaseAttachedEffect
{
    type: 'someOf';
    effects: AttachedEffect[];
    count: number | string;
    same: 'stack' | 'reroll' | 'ignore';
}

export interface AllEffectsOf extends BaseAttachedEffect
{
    type: 'allOf';
    effects: AttachedEffect[];
}

export interface Effect
{
    key: string;
    name: string;
    desc: string;
}