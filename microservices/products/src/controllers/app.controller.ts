import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices/decorators/message-pattern.decorator';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'GET_PRODUCTS' })
  getProducts(): string[] {
    return this.appService.getProducts();
  }
}
