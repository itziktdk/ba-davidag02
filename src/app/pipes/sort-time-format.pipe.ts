import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'sortTimeFormat'
})
export class SortTimeFormatPipe implements PipeTransform {

  transform(value: string, format: string): unknown {
    return moment(value).format(format);
  }

}
