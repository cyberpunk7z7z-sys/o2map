import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AirQualityService {
  private readonly apiToken: string;
  private readonly baseUrl = 'https://api.waqi.info';

  constructor() {
    this.apiToken = process.env.WAQI_API_TOKEN || '';
    if (!this.apiToken) {
      console.warn('WAQI_API_TOKEN not configured. Air quality API will not work.');
    }
  }

  async getAirQualityByCity(city: string) {
    if (!this.apiToken) {
      throw new HttpException(
        'Air quality API is not configured',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/feed/${encodeURIComponent(city)}/?token=${this.apiToken}`,
      );

      if (!response.ok) {
        throw new HttpException(
          'Failed to fetch air quality data',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const data = await response.json();

      if (data.status !== 'ok') {
        throw new HttpException(
          data.data || 'Invalid response from air quality API',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error fetching air quality data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAirQualityByCoordinates(lat: number, lon: number) {
    if (!this.apiToken) {
      throw new HttpException(
        'Air quality API is not configured',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/feed/geo:${lat};${lon}/?token=${this.apiToken}`,
      );

      if (!response.ok) {
        throw new HttpException(
          'Failed to fetch air quality data',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const data = await response.json();

      if (data.status !== 'ok') {
        throw new HttpException(
          data.data || 'Invalid response from air quality API',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error fetching air quality data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async searchStations(keyword: string) {
    if (!this.apiToken) {
      throw new HttpException(
        'Air quality API is not configured',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/search/?token=${this.apiToken}&keyword=${encodeURIComponent(keyword)}`,
      );

      if (!response.ok) {
        throw new HttpException(
          'Failed to search stations',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const data = await response.json();

      if (data.status !== 'ok') {
        throw new HttpException(
          data.data || 'Invalid response from air quality API',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error searching stations',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
