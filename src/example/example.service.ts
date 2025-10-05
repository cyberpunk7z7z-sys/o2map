import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  private items = [
    { id: '1', name: 'Example Item 1' },
    { id: '2', name: 'Example Item 2' },
  ];

  findAll() {
    return this.items;
  }

  findOne(id: string) {
    return this.items.find((item) => item.id === id);
  }

  create(data: { name: string }) {
    const newItem = {
      id: String(this.items.length + 1),
      name: data.name,
    };
    this.items.push(newItem);
    return newItem;
  }
}
