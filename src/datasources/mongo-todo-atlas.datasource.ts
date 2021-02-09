import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const dotenv = require('dotenv');
dotenv.config();

const config = {
  name: process.env.NAME,
  connector: process.env.CONNECTOR,
  url: process.env.URL,
  host: '',
  port: 0,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  useNewUrlParser: process.env.USE_NEW_URL_PARSER
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
