export declare class AirQualityService {
    private readonly apiToken;
    private readonly baseUrl;
    constructor();
    getAirQualityByCity(city: string): Promise<any>;
    getAirQualityByCoordinates(lat: number, lon: number): Promise<any>;
    searchStations(keyword: string): Promise<any>;
}
