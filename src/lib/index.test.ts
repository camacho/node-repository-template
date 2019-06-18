import { start } from './';

describe('Setup', () => {
  describe('start', () => {
    it('executes without throwing an error', async () => {
      await expect(start()).resolves.not.toThrow();
    });

    it('prints a message', async () => {
      start();
      await expect(console.log).toHaveBeenCalledWith('Running in test mode');
    });
  });
});
