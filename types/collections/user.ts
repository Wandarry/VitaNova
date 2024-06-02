import { BaseEntity } from "./base";

export interface UserEntity extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: Date;
}
