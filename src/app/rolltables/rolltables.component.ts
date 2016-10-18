import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { AttachedEffect, SomeEffectsOf } from '../model/ingredients';

import * as Dice from '../shared/dice';

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

class Rolltable
{
    get rollTimesHumanReadable()
    {
        switch (this.rollTimes)
        {
            case 1:
                return 'once';
            case 2:
                return 'twice';
            default:
                return this.rollTimes + '-times';
        }
    }

    get samePolicyHumanReadable()
    {
        switch (this.samePolicy)
        {
            case 'reroll':
                return ' Reroll any rolls with the same result.';
            case 'ignore':
                return ' Ignore any rolls with the same result.';
            default:
                return '';
        }
    }

    constructor(
        public key: string,
        public dice: string,
        public rollTimes: number | string,
        public samePolicy: string,
        public results: {
            low: number;
            high: number;
            table?: Rolltable;
            effect?: string;
            rolled?: number;
        }[]
    ) { }

    roll()
    {
        const rolls = isNaN(+this.rollTimes)
            ? Dice.roll(this.rollTimes as string)
            : +this.rollTimes,
            alreadyRolled = {};

        for (let rollCnt = 0; rollCnt < rolls; ++rollCnt)
        {
            const roll = Dice.roll(this.dice),
                result = this.results.find(r => r.low <= roll && r.high >= roll),
                range = `${result.low}-${result.high}`;
            if (this.samePolicy === 'ignore' && range in alreadyRolled)
            {
                console.log('ignore same roll');
                continue;
            }
            else if (this.samePolicy === 'reroll' && range in alreadyRolled)
            {
                console.log('reroll same roll');
                --rollCnt;
                continue;
            }
            else
            {
                alreadyRolled[range] = true;
                result.rolled = (result.rolled || 0) + 1;

                if (result.table) result.table.roll();
                else console.log(result.effect);
            }
        }
    }

    reset()
    {
        this.results.forEach(r => { delete r.rolled; r.table && r.table.reset(); });
    }

    toString()
    {
        return `Roll ${this.rollTimesHumanReadable} on Table ${this.key}.${this.samePolicyHumanReadable}`;
    }
}

// interface Rolltable
// {
//     times?: string;
//     key: string;
//     dice: string;
//     sameRollText: string;
//     results: {
//         on: string;
//         text: string;
//     }[];
//     instruction: string;
// }

interface ReducedEffect
{
    text: string;
    tables: Rolltable[];
    primaryTable: Rolltable;
    weight?: number;
}

function getSmallestDieCombo(maxNum, numDie = 1)
{
    const die = [4, 6, 8, 10, 12, 20, 100].find(v => v * numDie >= maxNum && v * numDie / maxNum % 1 === 0);
    return die
        ? [numDie, die]
        : numDie < 10
            ? getSmallestDieCombo(maxNum, numDie + 1)
            : [1, maxNum];
}

function reduceEffect(effect: AttachedEffect, tableKeys: {}): ReducedEffect
{
    const results: ReducedEffect[] = [];
    let key;

    // 1st pass, reduce inner effects
    switch (effect.type)
    {
        case 'oneOf':
        case 'someOf':
            key = nextKey(tableKeys);
        case 'allOf':
            results.splice(0, 0, ...effect.effects.map(e => reduceEffect(e, tableKeys)));
            break;
    }

    let text = '';
    const tables: Rolltable[] = results.reduce((aggr, curr) => aggr.concat(curr.tables), <Rolltable[]>[]);

    let primaryTable: Rolltable;


    // 2nd pass, return result
    switch (effect.type)
    {
        case 'single':
            {
                // TODO replace with effect?
                text = effect.effect || 'Nothing.';
                break;
            }
        case 'someOf':
        case 'oneOf':
            {
                let onOffset = 0;
                const totalWeight = effect.effects.reduce((aggr, curr) => aggr + (curr.weight || 1), 0),
                    [dieCount, die] = getSmallestDieCombo(totalWeight);
                primaryTable = new Rolltable(
                    key,
                    `${dieCount}d${die}`,
                    (effect as SomeEffectsOf).count || 1,
                    (effect as SomeEffectsOf).same || 'stack',
                    results.map(r =>
                    {
                        const prevOffset = onOffset,
                            mappedWeight = (r.weight || 1) * die / totalWeight * dieCount;
                        onOffset += mappedWeight;
                        return {
                            low: prevOffset + 1,
                            high: onOffset,
                            table: r.primaryTable,
                            effect: r.text
                        };
                    }));
                tables.splice(0, 0, primaryTable);
                text = primaryTable.toString();
                break;
            }
        case 'allOf':
            {
                text = results.map(r => r.text).join(' ');
                break;
            }
    }

    return {
        text,
        tables,
        primaryTable,
        weight: effect.weight
    };
}

@Component({
    selector: 'app-rolltables',
    templateUrl: './rolltables.component.html',
    styleUrls: ['./rolltables.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolltablesComponent implements OnInit
{
    @Input() effect: AttachedEffect;

    instruction: string;
    tables: Rolltable[] = [];
    primaryTable: Rolltable;

    constructor() { }

    ngOnInit()
    {
        const { text, tables, primaryTable } = reduceEffect(this.effect, {});
        this.instruction = text;
        this.tables = tables;
        this.primaryTable = primaryTable;
    }

    rollOnTables()
    {
        this.tables.forEach(t => t.reset());
        this.primaryTable.roll();
    }

}
