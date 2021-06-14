import { ApiProperty } from '@nestjs/swagger';
import { Wine } from '../wine.schema';

export class GetWinesResponse {
  @ApiProperty({
    type: [Wine],
  })
  wines: Wine[];
}
