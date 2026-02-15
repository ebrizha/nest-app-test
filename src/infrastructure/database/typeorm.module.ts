import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../config/database.config';
import { ReviewOrmEntity } from './entities/review/review.orm-entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db =
          configService.get<ConfigType<typeof databaseConfig>>('database');
        if (!db) {
          throw new Error('Database config is missing');
        }
        return {
          type: 'postgres',
          host: db.host,
          port: db.port,
          username: db.username,
          password: db.password,
          database: db.name,
          entities: [ReviewOrmEntity],
          migrations: [__dirname + '/migrations/*{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
  ],
})
export class TypeOrmDatabaseModule {}
