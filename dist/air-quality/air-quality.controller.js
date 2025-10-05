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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirQualityController = void 0;
const common_1 = require("@nestjs/common");
const air_quality_service_1 = require("./air-quality.service");
let AirQualityController = class AirQualityController {
    constructor(airQualityService) {
        this.airQualityService = airQualityService;
    }
    async getByCity(city) {
        return this.airQualityService.getAirQualityByCity(city);
    }
    async getByCoordinates(lat, lon) {
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);
        if (isNaN(latitude) || isNaN(longitude)) {
            throw new Error('Invalid coordinates');
        }
        return this.airQualityService.getAirQualityByCoordinates(latitude, longitude);
    }
    async searchStations(keyword) {
        if (!keyword) {
            throw new Error('Keyword is required');
        }
        return this.airQualityService.searchStations(keyword);
    }
};
exports.AirQualityController = AirQualityController;
__decorate([
    (0, common_1.Get)('city/:city'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirQualityController.prototype, "getByCity", null);
__decorate([
    (0, common_1.Get)('geo'),
    __param(0, (0, common_1.Query)('lat')),
    __param(1, (0, common_1.Query)('lon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AirQualityController.prototype, "getByCoordinates", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirQualityController.prototype, "searchStations", null);
exports.AirQualityController = AirQualityController = __decorate([
    (0, common_1.Controller)('air-quality'),
    __metadata("design:paramtypes", [air_quality_service_1.AirQualityService])
], AirQualityController);
//# sourceMappingURL=air-quality.controller.js.map