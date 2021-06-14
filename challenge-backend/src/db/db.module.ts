import { Module } from '@nestjs/common';
import { WineModule } from './wine/wine.module';

@Module({
  imports: [WineModule],
})
export class DbModule {}
