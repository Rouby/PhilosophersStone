import { Ingredient } from '../model/ingredients';

export const ingredients: Ingredient[] = [
    {
        key: 'angelFeather',
        name: 'Feather of an Angel',
        desc: [
            {
                dc: 18,
                text: 'Angels are formed from the astral essence of benevolent gods. They are beeings of order and law, and follow the commands of their gods to the letter. The feathers of an Angel can be used by skilled alchemists to harness some of the power. Potions brewed with this ingredient are often associated with flight or resistance to radiant damage.'
            },
            {
                dc: 14,
                text: 'Angels are almost always good beeings. The feathers from any Angel can be used in the brewing of powerful potions. Most likely the potion with an Angels feather will grant flight.'
            },
            {
                dc: 10,
                text: 'Angels can fly. So using their feathers *might* transition that power to the potion brewed.'
            }
        ],
        obtainedFrom: ['Deva', 'Planetar', 'Solar'],
        potionBase: 'basic',
        color: {
            rgb: '#fcff84',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'someOf',
            same: 'ignore',
            count: 2,
            effects: [
                {
                    type: 'oneOf',
                    effects: [
                        {
                            type: 'single',
                            weight: 2,
                            effect: 'fly-60ft-1h'
                        },
                        {
                            type: 'single',
                            weight: 3,
                            effect: 'fly-45ft-1h'
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
                            weight: 1,
                            effect: 'resistance-radiant-8h'
                        },
                        {
                            type: 'single',
                            weight: 3,
                            effect: 'resistance-radiant-1h'
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
    },
    {
        key: 'celestialEye',
        name: 'Eye of a Celestial',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Planetar', 'Solar'],
        potionBase: 'basic',
        color: {
            rgb: '#8ce2ff',
            strength: .6
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 2,
                    effect: 'truesight-60ft-1h'
                },
                {
                    type: 'single',
                    weight: 3,
                    effect: 'truesight-30ft-1h'
                },
                {
                    type: 'single',
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'angelEar',
        name: 'Ear of a Greater Angel',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Planetar', 'Solar'],
        potionBase: 'basic',
        color: {
            rgb: '#ffa8fd',
            strength: .7
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 4,
                    effect: 'detectLie-1h'
                },
                {
                    type: 'single',
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'ankhegAntenna',
        name: 'Antenna of an Ankheg',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Ankheg'],
        potionBase: 'acidic',
        color: {
            rgb: '#7b5757',
            strength: .3
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 2,
                    effect: 'tremorSense-30ft-1h'
                },
                {
                    type: 'single',
                    effect: null
                },
                {
                    type: 'single',
                    effect: 'damage-acid-1d6'
                }
            ]
        },
        reactions: []
    },
    {
        key: 'azerChippings',
        name: 'Chippings of an Azer',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Azer'],
        color: {
            rgb: '#fb0909',
            strength: .6
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    effect: 'immunity-fire-10m'
                },
                {
                    type: 'single',
                    effect: null
                },
                {
                    type: 'single',
                    effect: 'damage-fire-1d10'
                }
            ]
        },
        reactions: []
    },
    {
        key: 'bansheePlasmn',
        name: 'Banshees Plasmn',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Banshee'],
        potionBase: 'unworldly',
        color: {
            rgb: '#d6d6d6',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 25,
                    effect: 'gaseousForm-10m'
                },
                {
                    type: 'single',
                    weight: 15,
                    effect: 'horrifyingVisage-60ft-10m'
                },
                {
                    type: 'single',
                    weight: 9,
                    effect: null
                },
                {
                    type: 'single',
                    effect: 'wail-13dc'
                }
            ]
        },
        reactions: []
    },
    {
        key: 'basiliskGullet',
        name: 'Gullet of a Basilisk',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Basilisk'],
        potionBase: 'acidic',
        color: {
            rgb: '#98b097',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 2,
                    effect: 'stoneToFlesh'
                },
                {
                    type: 'single',
                    weight: 4,
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'behirTongue',
        name: 'Tongue of a Behir',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Behir'],
        color: {
            rgb: '#648597',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'someOf',
            count: 2,
            same: 'stack',
            effects: [
                {
                    type: 'single',
                    weight: 3,
                    effect: 'breath-line-20x5-lightning-6d10-15dc-dex'
                },
                {
                    type: 'single',
                    effect: null
                },
                {
                    type: 'single',
                    weight: 3,
                    effect: 'damage-lightning-6d10'
                }
            ]
        },
        reactions: []
    },
    {
        key: 'beholderCentralEye',
        name: 'Central-Eye of a Beholder',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Beholder'],
        potionBase: 'unworldly',
        color: {
            rgb: '#bf44a7',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 3,
                    effect: 'antimagicField-60ft-1h'
                },
                {
                    type: 'single',
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'beholderEyestalk',
        name: 'Eyestalk of a Beholder',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Beholder'],
        potionBase: 'unworldly',
        color: {
            rgb: '#bfc857',
            strength: .2
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    effect: 'petrify-15dc'
                },
                {
                    type: 'single',
                    effect: 'paralyze-15dc-30s'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'levitate-15dc-30s'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'fear-15dc-30s'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'sleep-15dc-30s'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'slow-15dc-30s'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'charm-15dc-30m'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'damage-necrotic-5d10-15dc'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'damage-force-5d8-15dc'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: 'damage-necrotic-4d8-15dc'
                },
                {
                    type: 'single',
                    weight: 2,
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'bugbearHeart',
        name: 'Heart of Hruggek',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Bugbear Chief'],
        potionBase: 'mundane',
        color: {
            rgb: '#910000',
            strength: .8
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 2,
                    effect: 'advantage-save-charmed|frightened|paralyzed|poisoned|stunned|sleep'
                },
                {
                    type: 'single',
                    effect: null
                }
            ]
        },
        reactions: []
    },
    {
        key: 'chuulLung',
        name: 'Lung of a Chuul',
        desc: [
            {
                dc: 12,
                text: 'This ingredient is used in ...'
            }
        ],
        obtainedFrom: ['Chuul'],
        potionBase: 'mundane',
        color: {
            rgb: '#21188b',
            strength: .5
        },
        visuals: [],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    weight: 2,
                    effect: 'breatheWater-1h'
                },
                {
                    type: 'single',
                    effect: null
                }
            ]
        },
        reactions: []
    }
    // {
    //     key: '',
    //     name: '',
    //     desc: '',
    //     obtainedFrom: [],
    //     effect: {

    //     },
    //     reactions: []
    // }
];