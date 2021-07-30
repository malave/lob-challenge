import { Injectable } from '@nestjs/common';
import { AddressService } from '../address/address.service';

@Injectable()
export class ApiService {
  constructor(private readonly addressService: AddressService) {}

  search(query: string): any[] {
    return this.addressService.search(query);
  }
}
