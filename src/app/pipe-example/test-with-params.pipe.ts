import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testWithParams'
})
export class TestWithParamsPipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    return `${before} ${value} ${after}`;
  }

}
