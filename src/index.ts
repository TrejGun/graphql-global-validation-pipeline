import "./env";
import {NestFactory} from "@nestjs/core";
import {useContainer} from "class-validator";

import {ApplicationModule} from "./app.module";


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);

  useContainer(app.select(ApplicationModule), {fallbackOnErrors: true});

  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Express server is running on http://${process.env.HOST}:${process.env.PORT}/`);

    if (process.env.NODE_ENV !== "production") {
      console.info(`GraphQL playground is at http://${process.env.HOST}:${process.env.PORT}/graphql`);
    }
  });
}

void bootstrap();
