import { Module } from '@nestjs/common';
import { ContactController } from './controller/contact.controller';
import { VCardService } from './service/vcard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from '../../configuration/configuration.module';
import { ContactEntity } from './domain/contact';
import { ContactService } from './service/contact.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity]), 
    ConfigurationModule
  ],
  controllers: [ContactController],
  providers: [VCardService, ContactService],
  exports: [TypeOrmModule]
})
export class ContactModule {}
