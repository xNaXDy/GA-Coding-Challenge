import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://' +
        (process.env.MONGO_USER ?? 'challengedb_user') +
        ':' +
        (process.env.MONGO_PASS ?? 'challengedb_pass') +
        '@' +
        (process.env.MONGO_HOST ?? 'localhost') +
        ':' +
        (process.env.MONGO_PORT ?? '27017'),
    ),
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
