import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { CreateUserRequestDto } from './create-user.request.dto';

@Controller()
export class CreateUserMessageController {
  constructor(private readonly commandBus: CommandBus) {}

  async create(message: CreateUserRequestDto): Promise<string> {
    const command = new CreateUserCommand(message);

    const id = await this.commandBus.execute(command);

    return id;
  }
}
