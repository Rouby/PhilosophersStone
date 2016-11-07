export interface Ingredient
{
    key: string;
    name: string;
    desc: { dc?: number; text: string; }[];
    icon?: string;
    potionBase?: PotionBase;
    obtainedFrom: string[];
    effect: AttachedEffect;
    reactions: Reaction[];
    color: {
        rgb: string;
        strength: number;
    };
    visuals: string[];
}

export type PotionBase = 'acidic' | 'basic' | 'mundane' | 'unworldly';

export interface Reaction
{
    otherIngredient: string;
    effect: AttachedEffect;
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