import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ReviewOrmEntity } from './entities/review/review.orm-entity';


console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('Data source configuration loaded with values:', {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [ReviewOrmEntity],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});

export default dataSource;
