"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
const common_1 = require("@nestjs/common");
let ExampleService = class ExampleService {
    constructor() {
        this.items = [
            { id: '1', name: 'Example Item 1' },
            { id: '2', name: 'Example Item 2' },
        ];
    }
    findAll() {
        return this.items;
    }
    findOne(id) {
        return this.items.find((item) => item.id === id);
    }
    create(data) {
        const newItem = {
            id: String(this.items.length + 1),
            name: data.name,
        };
        this.items.push(newItem);
        return newItem;
    }
};
exports.ExampleService = ExampleService;
exports.ExampleService = ExampleService = __decorate([
    (0, common_1.Injectable)()
], ExampleService);
//# sourceMappingURL=example.service.js.map