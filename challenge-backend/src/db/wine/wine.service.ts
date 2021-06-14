import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wine } from './wine.schema';
import { v4 as uuidgen } from 'uuid';

@Injectable()
export class WineService {
  constructor(@InjectModel(Wine.name) private wineModel: Model<Wine>) {}

  async createWine(createWineDto: Partial<Wine>): Promise<Wine> {
    const createdWine = new this.wineModel(createWineDto);
    createdWine._id = uuidgen();
    return createdWine.save();
  }

  async findAll(): Promise<Wine[]> {
    return this.wineModel.find().exec();
  }

  async findById(id: string): Promise<Wine> {
    return this.wineModel
      .findOne({
        _id: id,
      })
      .exec();
  }
}
