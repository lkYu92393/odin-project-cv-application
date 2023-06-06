import { getRandomString } from "./common";

test('randomString is 16 chars long', () => {
    expect(getRandomString().length).toBe(16);
  });