import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ContactEntity } from '../../packages/contact/domain/contact';

@Injectable()
export class DatabaseConfigService {

  constructor(private configService: ConfigService) {}

  get databaseHost() {
    return this.configService.get('database.host');
  }

  get databasePort() {
    return this.configService.get('database.port');
  }

  get databaseUser() {
    return this.configService.get('database.user');
  }

  get databasePassword() {
    return this.configService.get('database.password');
  }

  get databaseCollection() {
    return this.configService.get('database.collection');
  }

  get typeOrmConfig() {
    const config: TypeOrmModuleOptions = {
      type: 'mysql',
      host: this.databaseHost,
      port: this.databasePort,
      username: this.databaseUser,
      password: this.databasePassword,
      database: this.databaseCollection,
      keepConnectionAlive: true,
      entities: [ContactEntity],
    };
    return config;
  }

}