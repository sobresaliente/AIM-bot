import { Body, Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  public getTasks() {
    return this.tasksService.getAll();
  }

  @Get()
  public createTasks(@Body() ) {
    return this.tasksService.create();
  }
}
