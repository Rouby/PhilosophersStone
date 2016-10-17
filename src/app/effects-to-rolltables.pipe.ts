import { Pipe, PipeTransform } from '@angular/core';

import { AttachedEffect } from './model/ingredients';

export interface Rolltable
{
    times?: string;
    key: string;
    dice: string;
    sameRollText: string;
    results: {
        on: string;
        text: string;
    }[];
}

function nextKey(tableKeys: {})
{
    for (let i = 0; i < 26; ++i)
    {
        const key = String.fromCharCode(65 + i);
        if (!(key in tableKeys))
        {
            tableKeys[key] = true;
            return key;
        }
    }
    throw new Error('Too many tables!');
}

function sameToText(str)
{
    switch (str)
    {
        case 'reroll':
            return ' Reroll any rolls with the same result.';
        case 'ignore':
            return ' Ignore any rolls with the same result.';
        default:
            return '';
    }
}

function numberToText(num)
{
    switch (num)
    {
        case 1:
            return 'once';
        case 2:
            return 'twice';
        default:
            return num + '-times';
    }
}

function getSmallestDieCombo(maxNum, numDie = 1)
{
    const die = [4, 6, 8, 10, 12, 20, 100].find(v => v * numDie >= maxNum && v / maxNum % 1 === 0);
    return die
        ? [numDie, die]
        : numDie < 6
            ? getSmallestDieCombo(numDie + 1, maxNum)
            : [1, maxNum];
}

function reduceEffect(effect: AttachedEffect, tableKeys: {}): { table?: Rolltable, innerTables?: Rolltable[], result?: string; }
{
    let times = 'once',
        sameRollText = '';
    switch (effect.type)
    {
        case 'manyOf':
            times = isNaN(+effect.count) ? <string>effect.count : numberToText(effect.count);
            sameRollText = sameToText(effect.same);
        case 'oneOf':
            {
                let onOffset = 0,
                    innerTables = [],
                    totalWeight = effect.effects.reduce((aggr, curr) => aggr + (curr.weight || 1), 0),
                    [dieCount, die] = getSmallestDieCombo(totalWeight);
                const table = {
                    times,
                    key: nextKey(tableKeys),
                    dice: dieCount + 'd' + die,
                    sameRollText,
                    results: effect.effects.map(e =>
                    {
                        const red = reduceEffect(e, tableKeys);
                        if (red.table)
                        {
                            innerTables.push(red.table);
                            innerTables = innerTables.concat(red.innerTables || []);
                        }
                        const prevOffset = onOffset,
                            mappedWeight = (e.weight || 1) * die / totalWeight * dieCount;
                        onOffset += mappedWeight;
                        return {
                            on: prevOffset + 1 !== onOffset
                                ? `${prevOffset + 1}-${onOffset}`
                                : (prevOffset + 1).toString(),
                            text: red.result || (`Roll ${red.table.times} on Table ${red.table.key}.` + red.table.sameRollText)
                        };
                    })
                };
                return {
                    table,
                    innerTables
                };
            }
        case 'single':
            {
                return {
                    result: effect.effect || 'Nothing.'
                };
            }
    }
}


@Pipe({
    name: 'effectsToRolltables'
})
export class EffectsToRolltablesPipe implements PipeTransform
{

    transform(value: AttachedEffect, args?: any): any
    {
        const reduced = reduceEffect(value, args);
        return [reduced.table].concat(reduced.innerTables);
    }

}
