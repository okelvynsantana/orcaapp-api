import { Schema } from 'mongoose';
import { ItemSchema } from './item.schema';

export const CompositionSchema = new Schema({
  compositionCode: String,
  compositionDescription: String,
  coef: Number,
  price: Number,
  und: String,
  items: [ItemSchema],
});
