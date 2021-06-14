import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Wine extends Document {
  @Prop()
  @ApiProperty()
  _id: string;

  @Prop()
  @ApiProperty()
  country: string;

  @Prop()
  @ApiProperty()
  region: string;

  @Prop()
  @ApiProperty()
  lage: string;

  @Prop()
  @ApiProperty()
  sweetness: string;

  @Prop()
  @ApiProperty()
  sugarLevel: number;

  @Prop()
  @ApiProperty()
  wineType: string;

  @Prop()
  @ApiProperty()
  wineColor: string;

  @Prop()
  @ApiProperty()
  title: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty()
  alcoholLevel: number;

  @Prop()
  @ApiProperty()
  vintage: number;

  @Prop()
  @ApiProperty()
  validEAN: boolean;

  @Prop()
  @ApiProperty()
  acidity: number;

  @Prop()
  @ApiProperty()
  winery: string;

  @Prop()
  @ApiProperty()
  grape: string;

  @Prop()
  @ApiProperty()
  appellation: string;
}

export const WineSchema = SchemaFactory.createForClass(Wine);
