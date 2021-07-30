import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('search/:query')
  async get(@Param('query') query: string) {
    return this.apiService.search(query);
  }
}
