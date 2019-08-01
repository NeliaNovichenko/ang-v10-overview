import { TestWithParamsPipe } from './test-with-params.pipe';

describe('TestWithParamsPipe', () => {
  it('create an instance', () => {
    const pipe = new TestWithParamsPipe();
    expect(pipe).toBeTruthy();
  });
});
