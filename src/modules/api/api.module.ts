import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [AddressModule],
  providers: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
