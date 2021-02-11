import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Error: bad inputDataSource} from '../datasources';
import {Tag, TagRelations} from '../models';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.id,
  TagRelations
> {
  constructor(
    @inject('datasources.') dataSource: Error: bad inputDataSource,
  ) {
    super(Tag, dataSource);
  }
}
