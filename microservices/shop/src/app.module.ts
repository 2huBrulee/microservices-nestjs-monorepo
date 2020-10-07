import { Inject, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy, Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'monorepo',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientProxy){}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
}
