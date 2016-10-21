type EffectParameter =
    'duration' |
    'movement' |
    'damageType' |
    'range' |
    'dc' |
    'saveType' |
    'checkType' |
    'area' |
    'shape' |
    'dice' |
    'state' |
    'immuneAgainst' |
    'advOn' |
    'advAgainst';

export interface Effect
{
    key: string;
    name: string;
    desc: string;
    regex?: RegExp;
    regexGroups?: EffectParameter[];
    parameters?: {
        [effectParameter: string]: string;
    };
}