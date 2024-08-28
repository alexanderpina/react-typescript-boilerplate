import { loginApi } from '.';

describe('login API', () => {
  it('should return true on successfull login', async () => {
    const body = { username: 'user', password: 'user' };
    const res = await loginApi(body);
    expect(res).toBe(true);
  });

  it('should throw error message on failed login', async () => {
    expect.assertions(1);
    try {
      const body = { username: 'user', password: 'wrong' };
      await loginApi(body);
    } catch (err) {
      expect(err).toMatch('Invalid username or password');
    }
  });
});
