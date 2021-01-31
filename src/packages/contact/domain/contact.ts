import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contact'})
export class ContactEntity {
  @PrimaryGeneratedColumn({name: 'contact_id'})
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;
}