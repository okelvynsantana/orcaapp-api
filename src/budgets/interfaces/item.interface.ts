import { Document } from 'mongoose';

export interface Item extends Document {
  readonly _id: string;
  readonly compositionCode: string;
  readonly compositionDescription: string;
  readonly und: string;
  readonly itemCode: string;
  readonly itemDescription: string;
  readonly itemUnd: string;
  readonly coef: string;
  readonly price: number;
}
