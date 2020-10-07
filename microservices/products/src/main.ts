import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'monorepo',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
