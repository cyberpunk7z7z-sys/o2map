"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirQualityService = void 0;
const common_1 = require("@nestjs/common");
let AirQualityService = class AirQualityService {
    constructor() {
        this.baseUrl = 'https://api.waqi.info';
        this.apiToken = process.env.WAQI_API_TOKEN || '';
        if (!this.apiToken) {
            console.warn('WAQI_API_TOKEN not configured. Air quality API will not work.');
        }
    }
    async getAirQualityByCity(city) {
        if (!this.apiToken) {
            throw new common_1.HttpException('Air quality API is not configured', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        try {
            const response = await fetch(`${this.baseUrl}/feed/${encodeURIComponent(city)}/?token=${this.apiToken}`);
            if (!response.ok) {
                throw new common_1.HttpException('Failed to fetch air quality data', common_1.HttpStatus.BAD_GATEWAY);
            }
            const data = await response.json();
            if (data.status !== 'ok') {
                throw new common_1.HttpException(data.data || 'Invalid response from air quality API', common_1.HttpStatus.BAD_REQUEST);
            }
            return data.data;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error fetching air quality data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAirQualityByCoordinates(lat, lon) {
        if (!this.apiToken) {
            throw new common_1.HttpException('Air quality API is not configured', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        try {
            const response = await fetch(`${this.baseUrl}/feed/geo:${lat};${lon}/?token=${this.apiToken}`);
            if (!response.ok) {
                throw new common_1.HttpException('Failed to fetch air quality data', common_1.HttpStatus.BAD_GATEWAY);
            }
            const data = await response.json();
            if (data.status !== 'ok') {
                throw new common_1.HttpException(data.data || 'Invalid response from air quality API', common_1.HttpStatus.BAD_REQUEST);
            }
            return data.data;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error fetching air quality data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async searchStations(keyword) {
        if (!this.apiToken) {
            throw new common_1.HttpException('Air quality API is not configured', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        try {
            const response = await fetch(`${this.baseUrl}/search/?token=${this.apiToken}&keyword=${encodeURIComponent(keyword)}`);
            if (!response.ok) {
                throw new common_1.HttpException('Failed to search stations', common_1.HttpStatus.BAD_GATEWAY);
            }
            const data = await response.json();
            if (data.status !== 'ok') {
                throw new common_1.HttpException(data.data || 'Invalid response from air quality API', common_1.HttpStatus.BAD_REQUEST);
            }
            return data.data;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error searching stations', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AirQualityService = AirQualityService;
exports.AirQualityService = AirQualityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AirQualityService);
//# sourceMappingURL=air-quality.service.js.map