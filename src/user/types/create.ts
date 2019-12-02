import {Field, InputType} from "type-graphql";
import {IsEmail, MinLength, IsEnum} from "class-validator";
import {IUserCreateFields, UserRole} from "../interfaces";


@InputType()
export class UserCreateType implements IUserCreateFields{
  @Field()
  @IsEmail()
  readonly email: string;

  @Field()
  @MinLength(6)
  readonly password: string;

  @Field(_type => [UserRole])
  @IsEnum(UserRole, {each: true})
  roles: UserRole[];
}
