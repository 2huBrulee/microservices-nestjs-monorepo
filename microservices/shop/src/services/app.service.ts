import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientProxy,){}
  
  getProducts(): Observable<string[] >{
    const pattern = { cmd: 'GET_PRODUCTS' };
    return this.client.send<string[]>(pattern, 0);
  }
}
