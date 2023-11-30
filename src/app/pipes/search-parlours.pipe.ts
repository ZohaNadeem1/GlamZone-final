import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchParlours'
})
export class SearchParloursPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
