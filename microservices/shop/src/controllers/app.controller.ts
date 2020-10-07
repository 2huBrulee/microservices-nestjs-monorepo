import { Observable } from 'rxjs';
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<string[]> {
    return this.appService.getProducts();
  }
}
