import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as request from 'supertest';

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
      .expect(res => console.log(res.body));
  })
});
