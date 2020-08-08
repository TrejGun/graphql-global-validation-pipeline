import {Field, InputType} from "@nestjs/graphql";
import {IsEmail, IsEnum, IsString, MinLength} from "class-validator";
import {IUserCreateFields, UserRole} from "../interfaces";

@InputType()
export class UserCreateInputType implements IUserCreateFields {
  @Field()
  @IsEmail()
  public email: string;

  @Field()
  @IsString()
  @MinLength(6)
  public password: string;

  @Field(_type => [UserRole])
  @IsEnum(UserRole, {each: true})
  public roles: UserRole[];
}
