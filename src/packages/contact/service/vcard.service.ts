import { Injectable, Logger } from '@nestjs/common';
import * as vCard from 'vcf';
import { Contact } from '../domain/contact';

@Injectable()
export class VCardService {

  uploadContacts(vCardList: vCard[]) {
    const contactList = vCardList.map(this.mapVCardToContact);
  }

  private mapVCardToContact(vcard: vCard) {
    let email;
    let name;
    const json = vcard.toJSON()   
      json[1].forEach(element => {        
        switch(element[0]) {
          case 'fn':
            email = element[3];  
            break
          case 'email':
            name = element[3]
            break
        }        
      })
    return new Contact(email, name);
  }

}
