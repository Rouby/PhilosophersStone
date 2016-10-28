import { Effect } from '../model/effects';

export function getEffect(descriptor: string)
{
    for (let i = 0; i < effects.length; ++i)
    {
        const effect = effects[i],
            match = effect.regex.exec(descriptor);
        if (match)
        {
            const [_, ...params] = match,
                parameters = effect.regexGroups ? Object.assign({}, ...effect.regexGroups.map((key, idx) => ({ [key]: params[idx] }))) : {};
            return Object.assign({}, effect, { parameters }, {
                name: effect.name
                    .replace(/\$\?(\w+)\[(.+?)\]/, (_, chk, str) => parameters[chk] ? str : '')
                    .replace(/\${(\w+)(?:\|(.+?))?}/g, (_, str, def) => (parameters[str] || def || '').split('|').join(', '))
            });
        }
    }
    return null;
}

export const effects: Effect[] = [
    {
        name: 'Fly, ${movement}ft.',
        desc: '',
        regex: /fly\-(\d+)ft\-(\d+[ydhms])/,
        regexGroups: ['movement', 'duration']
    },
    {
        name: '${dice} ${damageType} damage$?dc[ (DC ${dc}, ${saveType|con}-save)]',
        desc: '',
        regex: /damage\-(\w+)\-(\d+d\d+)(?:-(\d+)dc(?:-(str|dex|con|wis|int|cha))?)?/,
        regexGroups: ['damageType', 'dice', 'dc', 'saveType']
    },
    {
        name: 'Resistance against ${damageType}',
        desc: '',
        regex: /resistance\-(\w+)\-(\d+[ydhms])/,
        regexGroups: ['damageType', 'duration']
    },
    {
        name: 'Immunity against ${immuneAgainst}',
        desc: '',
        regex: /immunity\-(\w+)\-(\d+[ydhms])/,
        regexGroups: ['immuneAgainst', 'duration']
    },
    {
        name: 'Truesight, ${range}ft.',
        desc: '',
        regex: /truesight\-(\d+)ft\-(\d+[ydhms])/,
        regexGroups: ['range', 'duration']
    },
    {
        name: 'Detect Lies',
        desc: '',
        regex: /detectLie\-(\d+[ydhms])/,
        regexGroups: ['duration']
    },
    {
        name: 'Tremor Sense, ${range}ft.',
        desc: '',
        regex: /tremorSense\-(\d+)ft\-(\d+[ydhms])/,
        regexGroups: ['range', 'duration']
    },
    {
        name: 'Gaseous Form',
        desc: '',
        regex: /gaseousForm\-(\d+[ydhms])/,
        regexGroups: ['duration']
    },
    {
        name: 'Horrifying Visage, ${range}ft.',
        desc: '',
        regex: /horrifyingVisage\-(\d+)ft\-(\d+[ydhms])/,
        regexGroups: ['range', 'duration']
    },
    {
        name: 'Wail (DC ${dc}, con-save)',
        desc: '',
        regex: /wail\-(\d+)dc/,
        regexGroups: ['dc']
    },
    {
        name: 'Stone to flesh',
        desc: '',
        regex: /stoneToFlesh/
    },
    {
        name: '${dice} ${damageType}-breath, ${area}-${shape} (DC 13, ${saveType}-save)',
        desc: '',
        regex: /breath\-(\w+)\-(\w+)\-(\w+)-(\d+d\d+)-(\d+)dc\-(\w+)/,
        regexGroups: ['shape', 'area', 'damageType', 'dice', 'dc', 'saveType']
    },
    {
        name: 'Stone to flesh',
        desc: '',
        regex: /stoneToFlesh/
    },
    {
        name: 'Petrify (DC ${dc}, dex-save)',
        desc: '',
        regex: /petrify\-(\d+)dc/
    },
    {
        name: 'Antimagic field, ${range}ft.',
        desc: '',
        regex: /antimagicField\-(\w+)ft\-(\d+[ydhms])/,
        regexGroups: ['range', 'duration']
    },
    {
        name: 'Paralyze (DC ${dc}, con-save)',
        desc: '',
        regex: /paralyze\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Fear (DC ${dc}, cha-save)',
        desc: '',
        regex: /fear\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Sleep (DC ${dc}, con-save)',
        desc: '',
        regex: /sleep\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Slow (DC ${dc}, con-save)',
        desc: '',
        regex: /slow\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Charm (DC ${dc}, cha-save)',
        desc: '',
        regex: /charm\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Levitate (DC ${dc}, con-save)',
        desc: '',
        regex: /levitate\-(\d+)dc\-(\d+[ydhms])/,
        regexGroups: ['dc', 'duration']
    },
    {
        name: 'Breathe Water',
        desc: '',
        regex: /breatheWater\-(\d+[ydhms])/,
        regexGroups: ['duration']
    },
    {
        name: 'Advantage on next ${advOn}$?advAgainst[ (against ${advAgainst})]',
        desc: '',
        regex: /advantage\-(save|check|initiative|attack|all)\-([\w|\|]+)/,
        regexGroups: ['advOn', 'advAgainst']
    }
];