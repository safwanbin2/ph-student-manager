import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function bootstrap() {
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
  });

  await mongoose.connect(config.db_url as string);
}

bootstrap();
