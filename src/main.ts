import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

(async function () {
  const server = await NestFactory.create(AppModule);
  await server.listen(3000);
})();
