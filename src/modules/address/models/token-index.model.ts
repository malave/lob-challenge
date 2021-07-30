export class TokenIndex {
  private tokenIndex: Map<string, Set<number>> = new Map();

  addToken(key: string, index: number) {
    let token = this.tokenIndex.get(key);
    if (!token) {
      token = new Set<number>();
    }
    token.add(index);
    this.tokenIndex.set(key, token);
  }

  search(query: string): number[] {
    const found: number[] = [];
    this.tokenIndex.forEach((addressIndexes, key) => {
      if (key.indexOf(query.toLowerCase()) >= 0) {
        found.push(...addressIndexes);
      }
    });
    return found;
  }

  clearIndex() {
    this.tokenIndex.clear();
  }
}
