import { Pipe, PipeTransform } from '@angular/core';
import { getEffect } from '../data/effects';

@Pipe({
    name: 'explainEffect'
})
export class ExplainEffectPipe implements PipeTransform
{

    transform(value: any, args?: any): any
    {
        return getEffect(value);
    }

}
