import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number, format: string): any {
    var s;
    if (format == 'hoursonly') {
      s = value / 60 + 'hrs';
    } else if (format == 'hoursandminutes') {
      s =
        Math.floor(value / 60) +
        'hrs' +
        (value % 60 > 0 ? ' and ' + (value % 60) + 'mins' : '');
    } else {
      s = value;
    }
    return s;
  }
}
