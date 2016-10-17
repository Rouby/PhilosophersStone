export interface Ingredient
{
    key: string;
    name: string;
    desc: string;
    obtainedFrom: string;
    effects: AttachedEffect;
    reactions: Reaction[];
}

export interface Reaction
{
    otherIngredient: string;
    effects: AttachedEffect;
}

export type AttachedEffect = SingleEffect | OneEffectOf | ManyEffectsOf;

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

export interface ManyEffectsOf extends BaseAttachedEffect
{
    type: 'manyOf';
    effects: AttachedEffect[];
    count: number | string;
    same: 'stack' | 'reroll' | 'ignore';
}

export interface Effect
{
    key: string;
    name: string;
    desc: string;
}