import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testWithParams',
  pure: true
})
export class TestWithParamsPipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    return `${before} ${value} ${after}`;
  }

}
