import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as request from 'supertest';
import { ContactEntity } from '../src/packages/contact/domain/contact';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('upload contacts file', () => {
    return request(app.getHttpServer())
      .post('/contact/upload')
      .attach('contacts.vcf','test/files/contacts.vcf')
      .expect(201)
      .expect(res => {
        const body: ContactEntity[] = res.body;
        expect(body.length).toEqual(3);
        const element0 = body[0];
        expect(element0.id).not.toBe(undefined);
        expect(element0.name).toEqual('Contacto Circular');
        expect(element0.email).toEqual('contact@trycircular.com');
        const element1 = body[1];
        expect(element1.id).not.toBe(undefined);
        expect(element1.name).toEqual('David Valverde')
        expect(element1.email).toEqual('davidvalverde251293@hotmail.com');
        const element2 = body[2];
        expect(element2.id).not.toBe(undefined);
        expect(element2.name).toEqual('Juan Palomares');
        expect(element2.email).toEqual('juan@barterenergy.es');
      });
  })
});
