import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Item } from '../interfaces/item.interface';

export class CreateCompositionDTO {
  @IsString()
  @IsNotEmpty()
  readonly compositionCode: string;

  @IsString()
  @IsNotEmpty()
  readonly compositionDescription: string;

  @IsNumber()
  @IsNotEmpty()
  readonly coef: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly und: string;

  readonly items: Item[];
}
