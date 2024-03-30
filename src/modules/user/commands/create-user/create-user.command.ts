import { Command, CommandProps } from '@libs/ddd';

export class CreateUserCommand extends Command {
  readonly id: string;

  readonly username: string;

  constructor(props: CommandProps<CreateUserCommand>) {
    super(props);
    this.id = props.id;
    this.username = props.username;
  }
}
