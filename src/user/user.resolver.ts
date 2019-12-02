import {Args, Query, Mutation, Resolver} from "@nestjs/graphql";
import {Int} from "type-graphql";

import {UserEntity} from "./user.entity";
import {UserService} from "./user.service";
import {UserCreateType, UserListType, UserType} from "./types";


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => UserType)
  public getById(@Args({name: "id", type: () => Int}) id: number): Promise<UserEntity | undefined> {
    return this.userService.findOne({id});
  }

  @Mutation(_returns => UserType)
  public createUser(@Args("input") data: UserCreateType): Promise<UserEntity> {
    return this.userService.create(data);
  }

  @Query(_returns => UserListType)
  public listUsers(): Promise<UserListType> {
    return this.userService.findAndCount().then(([list, count]) => ({list, count}));
  }

}
