import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoTodoAtlasDataSource} from '../datasources';
import {Task, TaskRelations} from '../models';


export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.id,
  TaskRelations
> {
  constructor(
    @inject('datasources.MongoTodoAtlas') dataSource: MongoTodoAtlasDataSource,
  ) {
    super(Task, dataSource);
  }
}
