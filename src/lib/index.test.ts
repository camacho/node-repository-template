import { start } from './';

describe('Setup', () => {
  describe('start', () => {
    it('executes without throwing an error', async () => {
      return expect(start()).resolves.not.toThrow();
    });

    it('prints a message', async () => {
      await start();
      return expect(console.log).toHaveBeenCalledWith('Running in test mode');
    });
  });
});
