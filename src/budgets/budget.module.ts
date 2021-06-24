import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompositionSchema } from './schemas/composition.schema';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: CompositionSchema, name: 'composition' },
      { schema: ItemSchema, name: 'item' },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class BudgetModule {}
