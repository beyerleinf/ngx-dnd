import {callFunction} from './call-function';

describe('callFunction', () => {
  it('should call the function', () => {
    const spy = spyOn(console, 'log');
    callFunction(console.log);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the function with parameters', () => {
    const spy = spyOn(console, 'log');
    callFunction(console.log, 'Hello', 'from', 'the', 'test');
    expect(spy).toHaveBeenCalledWith(['Hello', 'from', 'the', 'test']);
  });
});
