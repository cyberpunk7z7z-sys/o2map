import { AirQualityService } from './air-quality.service';
export declare class AirQualityController {
    private readonly airQualityService;
    constructor(airQualityService: AirQualityService);
    getByCity(city: string): Promise<any>;
    getByCoordinates(lat: string, lon: string): Promise<any>;
    searchStations(keyword: string): Promise<any>;
}
