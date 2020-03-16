import {Args, Query, Mutation, Resolver,Int} from "@nestjs/graphql";


import {UserEntity} from "./user.entity";
import {UserService} from "./user.service";
import {UserCreateInputType, UserListType, UserType} from "./types";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => UserType)
  public getById(@Args({name: "id", type: () => Int}) id: number): Promise<UserEntity | undefined> {
    return this.userService.findOne({id});
  }

  @Mutation(_returns => UserType)
  public createUser(@Args("input") data: UserCreateInputType): Promise<UserEntity> {
    return this.userService.create(data);
  }

  @Query(_returns => UserListType)
  public listUsers(): Promise<UserListType> {
    return this.userService.findAndCount().then(([list, count]) => ({list, count}));
  }
}
