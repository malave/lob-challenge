import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { IndexerJob } from './indexer.job';

@Module({
  providers: [AddressService, IndexerJob],
  exports: [AddressService],
})
export class AddressModule {}
