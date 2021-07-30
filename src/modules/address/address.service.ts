import { Injectable, Logger } from '@nestjs/common';
import { TokenIndex } from './models/token-index.model';
import Tokenizer from '../../util/tokenizer.util';

@Injectable()
export class AddressService {
  private readonly logger = new Logger(AddressService.name);
  private readonly tokensIndex: TokenIndex;
  private addressDB: any[];

  constructor() {
    this.tokensIndex = new TokenIndex();
  }

  search(query: string): any[] {
    this.logger.debug(`Search query: ${query}`);
    const queryTokens = Tokenizer(query);
    const foundIndexes = queryTokens
      .map((queryToken) => this.tokensIndex.search(queryToken))
      .flat();
    const uniqueIndexes = [...new Set(foundIndexes)];
    const result = uniqueIndexes.map((index) => this.addressDB[index]);
    this.logger.debug(`Search results: ${result.length}`);
    return result;
  }

  index(data: any): void {
    this.logger.debug('Indexing');
    this.addressDB = data;
    data.forEach((item, index) => {
      let tokens = Object.keys(item)
        .map((field) => Tokenizer(item[field]))
        .flat();

      // remove duplicates across all fields
      tokens = [...new Set(tokens)];

      // add tokens to the indexed map and update/initialize the value
      tokens.forEach((token) => {
        this.tokensIndex.addToken(token, index);
      });
    });
  }

  clearIndex(): void {
    this.logger.debug('Clearing Index');
    this.addressDB = null;
    if (this.tokensIndex) {
      this.tokensIndex.clearIndex();
    }
  }
}
