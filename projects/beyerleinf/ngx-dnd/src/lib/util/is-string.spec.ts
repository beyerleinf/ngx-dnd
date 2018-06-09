import {isString} from './is-string';

describe('isString', () => {
  it('should return false if no string given', () => {
    expect(isString(100)).toBeFalsy();
  });

  it('should return true when string given', () => {
    expect(isString('SomeString')).toBeTruthy();
  });
});
