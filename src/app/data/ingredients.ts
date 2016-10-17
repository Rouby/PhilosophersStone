import { Ingredient } from '../model/ingredients';

export const ingredients: Ingredient[] = [
    {
        key: 'devaFeather',
        name: 'Feather of a Deva',
        desc: '',
        obtainedFrom: 'Deva',
        effects: {
            type: 'manyOf',
            same: 'ignore',
            count: 2,
            effects: [
                {
                    type: 'oneOf',
                    effects: [
                        {
                            type: 'single',
                            weight: 3,
                            effect: 'fly45-1h'
                        },
                        {
                            type: 'single',
                            weight: 2,
                            effect: 'fly60-1h'
                        },
                        {
                            type: 'single',
                            effect: null
                        }
                    ]
                },
                {
                    type: 'oneOf',
                    effects: [
                        {
                            type: 'single',
                            weight: 3,
                            effect: 'resistRadiant-1h'
                        },
                        {
                            type: 'single',
                            weight: 1,
                            effect: 'resistRadiant-8h'
                        },
                        {
                            type: 'single',
                            effect: null
                        }
                    ]
                }
            ]
        },
        reactions: []
    }
];