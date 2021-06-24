import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompositionDTO } from '../dto/createComposition.dto';
import { Composition } from '../interfaces/composition.interface';

@Injectable()
export class CompositionRepositiory {
  constructor(
    @InjectModel('composition')
    private readonly compositionModel: Model<Composition>,
  ) {}

  async createManyCompositions(
    compositions: CreateCompositionDTO[],
  ): Promise<Composition[]> {
    const newCompositions = await this.compositionModel.insertMany(
      compositions,
    );

    return newCompositions;
  }
}
