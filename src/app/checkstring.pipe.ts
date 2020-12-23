import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkstring'
})
export class CheckstringPipe implements PipeTransform {
  check: any = '';
  transform(value: unknown, ...args: unknown[]): unknown {
    this.check = value;
  //  console.log(args);
    var check = this.check.includes(args[0]);
  //  console.log(check);
    if(check){
      return check;
    }else{
      return check;
    }
  }

}
