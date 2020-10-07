import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts(): string[] {
    return ['apple', 'banana', 'pear', 'pineapple'];
  }
}
