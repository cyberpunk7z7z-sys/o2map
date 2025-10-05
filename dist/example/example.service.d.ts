export declare class ExampleService {
    private items;
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
