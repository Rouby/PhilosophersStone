import { Ingredient } from '../model/ingredients';

export const ingredients: Ingredient[] = [
    {
        key: 'angelFeather',
        name: 'Feather of an Angel',
        desc: '',
        obtainedFrom: ['Deva', 'Planetar', 'Solar'],
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
        desc: '',
        obtainedFrom: ['Planetar', 'Solar'],
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
        desc: '',
        obtainedFrom: ['Planetar', 'Solar'],
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
        desc: '',
        obtainedFrom: ['Ankheg'],
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
        desc: '',
        obtainedFrom: ['Azer'],
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
        desc: '',
        obtainedFrom: ['Banshee'],
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
                    effect: 'horrifyingVisage-60ft-10min'
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
        desc: '',
        obtainedFrom: ['Basilisk'],
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
        desc: '',
        obtainedFrom: ['Behir'],
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
        desc: '',
        obtainedFrom: ['Beholder'],
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
        desc: '',
        obtainedFrom: ['Beholder'],
        effect: {
            type: 'oneOf',
            effects: [
                {
                    type: 'single',
                    effect: 'petrify-15dc'
                },
                {
                    type: 'single',
                    effect: 'paralyse-15dc-30s'
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
        desc: '',
        obtainedFrom: ['Bugbear Chief'],
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
        desc: '',
        obtainedFrom: ['Chuul'],
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