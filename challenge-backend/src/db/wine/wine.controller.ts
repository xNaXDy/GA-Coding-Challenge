import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { GetWinesResponse } from './dto/getWinesResponse.dto';
import { Wine } from './wine.schema';
import { WineService } from './wine.service';

@Controller('wine')
export class WineController {
  constructor(private wineService: WineService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Gets a list of all wines.',
  })
  @ApiOkResponse({
    description: 'List of all wines.',
    type: GetWinesResponse,
  })
  async getWines(): Promise<GetWinesResponse> {
    return {
      wines: await this.wineService.findAll(),
    };
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get details of a specific wine.',
  })
  @ApiOkResponse({
    description: 'The details of the wine.',
    type: Wine,
  })
  @ApiNotFoundResponse({
    description: 'The wine with the given ID does not exist.',
  })
  async getWine(@Param('id') id: string): Promise<Wine> {
    const wine = await this.wineService.findById(id);
    if (wine) {
      return wine;
    } else {
      throw new NotFoundException('The wine with the given ID does not exist.');
    }
  }

  @Post('')
  @ApiOperation({
    summary:
      'Adds a new wine to the database. If the _id field is set, it will be overwritten by the backend.',
  })
  @ApiCreatedResponse({
    description: 'The Operation was successful.',
  })
  @ApiBody({
    type: Wine,
  })
  async createWine(@Body() body: Wine): Promise<void> {
    console.log(body);
    await this.wineService.createWine(body);
  }

  @Put('')
  @ApiOperation({
    summary:
      'Update details of a wine. All fields except _id are optional. If a field is not present, no change will occur.',
  })
  @ApiOkResponse({
    description: 'The Operation was successful. Result is the updated wine.',
    type: Wine,
  })
  @ApiNotFoundResponse({
    description: 'The wine with the given ID does not exist.',
  })
  @ApiBody({
    type: Wine,
  })
  async updateWine(@Body() body: Wine): Promise<Wine> {
    const existingWine = await this.wineService.findById(body._id);
    if (existingWine) {
      existingWine.set(body);
      return existingWine.save();
    } else {
      throw new NotFoundException('The wine with the given ID was not found.');
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a wine.',
  })
  @ApiOkResponse({
    description: 'The operation was successful.',
  })
  @ApiNotFoundResponse({
    description: 'The wine with the given ID does not exist.',
  })
  async deleteWine(@Param('id') id: string): Promise<void> {
    const existingWine = await this.wineService.findById(id);
    if (!existingWine) {
      throw new NotFoundException('The wine with the given ID does not exist.');
    }
    await existingWine.delete();
  }
}
