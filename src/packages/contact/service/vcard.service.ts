import { Injectable, Logger } from '@nestjs/common';
import * as vCard from 'vcf';
import { ContactEntity } from '../domain/contact';
import { ContactService } from './contact.service';

@Injectable()
export class VCardService {

  constructor(
    private contactService: ContactService,
  ) {}

  uploadContacts(vCardList: vCard[]) {
    const contactEntityList = vCardList.map(this.mapVCardToContact);
    return this.contactService.createContactFromList(contactEntityList);
  }

  private mapVCardToContact(vcard: vCard) {
    const contactEntity = new ContactEntity()
    const json = vcard.toJSON()   
      json[1].forEach(element => {        
        switch(element[0]) {
          case 'fn':
            contactEntity.name = element[3] as string;  
            break
          case 'email':
            contactEntity.email = element[3] as string;
            break
        }        
      })
    return contactEntity;
  }

}
