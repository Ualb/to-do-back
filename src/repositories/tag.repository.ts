import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoTodoAtlasDataSource} from '../datasources';
import {Tag, TagRelations} from '../models';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.id,
  TagRelations
> {
  constructor(
    @inject('datasources.MongoTodoAtlas') dataSource: MongoTodoAtlasDataSource,
  ) {
    super(Tag, dataSource);
  }
}
