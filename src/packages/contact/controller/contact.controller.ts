import { Controller, Post, UploadedFile, UseInterceptors, Logger, Get, Inject } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'vcf';
import { VCardService } from '../service/vcard.service';

@Controller('contact')
export class ContactController {

  constructor(
    private vCardService: VCardService
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('contacts.vcf'))
  uploadFile(@UploadedFile() file) {
   this.vCardService.uploadContacts(parse(file.buffer));
  }

}
