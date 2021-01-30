import { Module } from '@nestjs/common';
import { ContactController } from './controller/contact.controller';
import { VCardService } from './service/vcard.service';

@Module({
  controllers: [ContactController],
  providers: [VCardService]
})
export class ContactModule {}
