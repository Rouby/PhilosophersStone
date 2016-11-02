import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'describe'
})
export class DescribePipe implements PipeTransform
{
    transform(value: { dc?: number; text: string; }[], args?: any): any
    {
        return Object.assign({ text: 'You know nothing, Jon Snow.' }, value.find(d => (d.dc || 0) <= args)).text;
    }
}
