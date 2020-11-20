import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { initSwagger } from './post/app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  initSwagger(app);
  //Activate Validation
  app.useGlobalPipes(
    new ValidationPipe({
      //el pipe de validacion
      whitelist: true,
      //skipMissingProperties: true,
    }),
  );

  //app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(8084);

  logger.log(`esta es la URL ${await app.getUrl()}`);
}
bootstrap();
