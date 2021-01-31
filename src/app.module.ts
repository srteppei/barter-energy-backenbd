import { Module } from '@nestjs/common';
import { ContactModule } from './packages/contact/contact.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './configuration/packages/database/database.module';

@Module({
  imports: [ContactModule, ConfigurationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
