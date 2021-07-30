import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import * as path from 'path';
import { AddressService } from './address.service';
import * as fs from 'fs';

@Injectable()
export class IndexerJob {
  private readonly logger = new Logger(IndexerJob.name);

  constructor(private readonly addressService: AddressService) {}

  @Timeout(0)
  @Cron(CronExpression.EVERY_MINUTE)
  async indexer() {
    const logger = this.logger;
    try {
      const filePath = path.resolve(process.cwd() + '/data/addresses.json');
      logger.debug(filePath);
      const rawData = await fs.readFileSync(filePath, 'utf-8');
      const addresses = JSON.parse(rawData);
      this.addressService.clearIndex();
      this.addressService.index(addresses);
    } catch (e) {
      this.logger.error(e);
    }
  }
}
