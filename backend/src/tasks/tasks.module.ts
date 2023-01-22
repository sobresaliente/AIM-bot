import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks/tasks.service';
import { TasksController } from './controllers/tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Tasks])],
})
export class TasksModule {}
