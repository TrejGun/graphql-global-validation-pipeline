import {UserRole} from "./roles";

export interface IUserCreateFields {
  email: string;
  password: string;
  roles: UserRole[];
}
