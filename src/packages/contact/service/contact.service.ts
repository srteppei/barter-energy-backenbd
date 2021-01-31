import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../domain/contact';

@Injectable()
export class ContactService {

  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>
  ) {}

  async createContactFromList(contactEntityList: ContactEntity[]) {
    const finalContactList: ContactEntity[] = [];
    for(let i = 0; i < contactEntityList.length; i++) {
      finalContactList.push(await this.createContact(contactEntityList[i]));
    }
    return finalContactList;
  }

  async createContact(contactEntity: ContactEntity) {
    return this.contactRepository.save(contactEntity);
  }

}
