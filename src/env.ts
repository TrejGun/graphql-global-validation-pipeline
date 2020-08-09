import {config} from "dotenv";


config();

// This namespace redefines one from @types/node to reflect values from .env
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";

      // SERVER
      HOST: string;
      PORT: string;

      // DB
      POSTGRES_URL: string;
    }
  }
}
