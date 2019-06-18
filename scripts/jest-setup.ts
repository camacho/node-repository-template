import jestMockConsole from 'jest-mock-console';

{
  let restoreConsole;

  beforeEach(() => {
    restoreConsole = jestMockConsole();
  });

  afterEach(() => {
    restoreConsole();
  });
}
