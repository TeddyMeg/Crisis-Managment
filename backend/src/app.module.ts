import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Your database host
      port: 5432,        // PostgreSQL default port
      username: 'postgres', // Replace with your PostgreSQL username
      password: 'password', // Replace with your PostgreSQL password
      database: 'my_nest_db', // Replace with your PostgreSQL database name
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
