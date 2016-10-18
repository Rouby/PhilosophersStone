import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'range'
})
export class RangePipe implements PipeTransform
{

    transform(value: any, args?: any): any
    {
        return value.low === value.high ? value.low : `${value.low}-${value.high}`;
    }

}
