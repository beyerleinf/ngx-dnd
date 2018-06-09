import {isFunction} from './is-function';

describe('isFunction', () => {
  it('should return false when no function given', () => {
    expect(isFunction('SomeString')).toBeFalsy();
  });

  it('should return true when a function is given', () => {
    const func = () => {};
    expect(isFunction(func)).toBeTruthy();
  });
});
