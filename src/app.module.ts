import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryEntity } from './dictionaries/dictionary.entity';

@Module({
  imports: [
    DictionaryEntity,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1N#xplicavel',
      database: 'dictionaries',
      entities: [DictionaryEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
