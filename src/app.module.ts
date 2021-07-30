import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './modules/address/address.module';
import { ApiModule } from './modules/api/api.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), AddressModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
