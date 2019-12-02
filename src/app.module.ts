import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GraphQLModule} from "@nestjs/graphql";

import {UserModule} from "./user/user.module";
import {GqlConfigService} from "./graphql.options";
import {TypeOrmConfigService} from "./typeorm.options";


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    UserModule,
  ],
})
export class ApplicationModule {
}
