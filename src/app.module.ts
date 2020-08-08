import {Module} from "@nestjs/common";
import {APP_PIPE} from "@nestjs/core";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GraphQLModule} from "@nestjs/graphql";

import {UserModule} from "./user/user.module";
import {GqlConfigService} from "./graphql.options";
import {TypeOrmConfigService} from "./typeorm.options";
import {CustomValidationPipe} from "./common/pipes";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe,
    },
  ],
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
export class ApplicationModule {}
