import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ExampleModule } from './example/example.module';
import { AirQualityModule } from './air-quality/air-quality.module';

@Module({
  imports: [SupabaseModule, ExampleModule, AirQualityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
