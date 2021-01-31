import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from '../../configuration.module';
import { DatabaseConfigService } from '../../service/database-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [DatabaseConfigService],
      useFactory: (config: DatabaseConfigService) => config.typeOrmConfig,
    }),
  ]
})
export class DatabaseModule {}