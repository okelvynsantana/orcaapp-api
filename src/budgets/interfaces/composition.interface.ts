import { Document } from 'mongoose';
import { Item } from './item.interface';

export interface Composition extends Document {
  readonly _id: string;
  readonly compositionCode: string;
  readonly compositionDescription: string;
  readonly coef: number;
  readonly price: number;
  readonly und: string;
  readonly items: Item[];
}
