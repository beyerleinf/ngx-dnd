import {callFunction} from './call-function';

describe('callFunction', () => {
  it('should call the function', () => {
    const spy = jasmine.createSpy();
    callFunction(spy);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the function with parameters', () => {
    const spy = jasmine.createSpy();
    callFunction(spy, 'Hello', 'from', 'the', 'test');
    expect(spy).toHaveBeenCalledWith(['Hello', 'from', 'the', 'test']);
  });
});
