import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  compositionCode: String,
  compositionDescription: String,
  und: String,
  itemCode: String,
  itemDescription: String,
  itemUnd: String,
  coef: String,
  price: Number,
});
