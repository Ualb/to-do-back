import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoTodoAtlasDataSource} from '../datasources';
import {List, ListRelations} from '../models';

export class ListRepository extends DefaultCrudRepository<
  List,
  typeof List.prototype.id,
  ListRelations
> {
  constructor(
    @inject('datasources.MongoTodoAtlas') dataSource: MongoTodoAtlasDataSource,
  ) {
    super(List, dataSource);
  }
}
