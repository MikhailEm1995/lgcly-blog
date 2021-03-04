const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'main',
  password: 'password',
  database: 'main',
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/dist/**/migrations/**/*.js'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/modules',
    migrationsDir: 'src/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
