import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoTodoAtlas',
  connector: 'mongodb',
  url: 'mongodb+srv://todo:todo@cluster0.i93l0.mongodb.net/todo',
  host: '',
  port: 0,
  user: 'todo',
  password: 'todo',
  database: 'todo',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoTodoAtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoTodoAtlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoTodoAtlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
