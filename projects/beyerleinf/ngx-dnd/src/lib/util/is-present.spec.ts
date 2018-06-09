import {isPresent} from './is-present';

describe('isPresent', () => {
  it('should return false when undefined given', () => {
    expect(isPresent(undefined)).toBeFalsy();
  });

  it('should return false when null given', () => {
    expect(isPresent(null)).toBeFalsy();
  });

  it('should return false when something is present', () => {
    expect(isPresent('Hello')).toBeTruthy();
  });
});
