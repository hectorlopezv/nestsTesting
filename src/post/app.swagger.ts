import { INestApplication } from "@nestjs/common";//instanciar el app
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export const initSwagger = (app: INestApplication) => {

    const options = new DocumentBuilder()
    .setTitle('post example')
    .setDescription('The Post API description')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);
}
