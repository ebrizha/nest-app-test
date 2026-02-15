import dataSource from './data-source';

async function run() {
  await dataSource.initialize();
  await dataSource.runMigrations();
  await dataSource.destroy();
}

run();
