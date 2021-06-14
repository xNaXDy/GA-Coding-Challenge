import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Wine, WineSchema } from './wine.schema';
import { WineService } from './wine.service';
import { WineController } from './wine.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wine.name, schema: WineSchema }]),
  ],
  providers: [WineService],
  controllers: [WineController],
})
export class WineModule {}
