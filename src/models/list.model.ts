import {Entity, model, property} from '@loopback/repository';

@model()
export class List extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  emailUser: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  creationDate: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  tasks?: object[];


  constructor(data?: Partial<List>) {
    super(data);
  }
}

export interface ListRelations {
  // describe navigational properties here
}

export type ListWithRelations = List & ListRelations;
