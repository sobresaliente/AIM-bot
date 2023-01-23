import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from 'src/tasks/DTO/CreateTask.dto';
import { Tasks } from 'src/tasks/tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly tasksRepository: Repository<Tasks>,
  ) {}

  public async getAll(): Promise<Tasks[]> {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  public async create(task: CreateTaskDTO): Promise<Tasks> {
    const createdTask = await this.tasksRepository.save(task);

    return createdTask;
  }
}
