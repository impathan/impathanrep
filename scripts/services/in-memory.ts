import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Product A' },
      { id: 12, name: 'Product B' },
      { id: 13, name: 'Product C' },
      { id: 14, name: 'Product D' }
    ];
    return {products};
  }
}
