import { start } from './lib/index';

process.title = 'Application';
start()
  .then(() => {
    process.exit();
  })
  .catch(error => {
    console.error(error.message || error);
    process.exit(1);
  });
