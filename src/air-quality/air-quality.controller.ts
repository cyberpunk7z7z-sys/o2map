import { Controller, Get, Query, Param } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';

@Controller('air-quality')
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @Get('city/:city')
  async getByCity(@Param('city') city: string) {
    return this.airQualityService.getAirQualityByCity(city);
  }

  @Get('geo')
  async getByCoordinates(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ) {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    if (isNaN(latitude) || isNaN(longitude)) {
      throw new Error('Invalid coordinates');
    }

    return this.airQualityService.getAirQualityByCoordinates(
      latitude,
      longitude,
    );
  }

  @Get('search')
  async searchStations(@Query('keyword') keyword: string) {
    if (!keyword) {
      throw new Error('Keyword is required');
    }
    return this.airQualityService.searchStations(keyword);
  }
}
