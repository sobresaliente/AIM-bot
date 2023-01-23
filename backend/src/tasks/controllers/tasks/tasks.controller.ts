import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/DTO/CreateTask.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  public getTasks() {
    return this.tasksService.getAll();
  }

  @Post()
  public createTasks(@Body() task: CreateTaskDTO) {
    return this.tasksService.create(task);
  }
}
