import { config } from '.';

describe('Config', () => {
  it('build configuration based on schema', () => {
    expect(config.getProperties()).toMatchInlineSnapshot(`
      Object {
        "env": "test",
        "log": Object {
          "level": "INFO",
        },
      }
    `);
  });
});
