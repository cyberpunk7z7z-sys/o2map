import { ExampleService } from './example.service';
export declare class ExampleController {
    private readonly exampleService;
    constructor(exampleService: ExampleService);
    findAll(): {
        id: string;
        name: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
    };
    create(data: {
        name: string;
    }): {
        id: string;
        name: string;
    };
}
