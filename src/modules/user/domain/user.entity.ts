import { AggregateRoot, AggregateID } from '@libs/ddd';
import { UserCreatedDomainEvent } from './events/user-created.domain-event';
import { CreateUserProps, UserProps } from './user.types';
import { UserDeletedDomainEvent } from './events/user-deleted.domain-event';

export class UserEntity extends AggregateRoot<UserProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateUserProps): UserEntity {
    const id = create.id;
    const props: UserProps = { ...create };
    const user = new UserEntity({ id, props });

    /* adding "UserCreated" Domain Event that will be published
    eventually so an event handler somewhere may receive it and do an
    appropriate action. Multiple events can be added if needed. */
    user.addEvent(
      new UserCreatedDomainEvent({
        aggregateId: id,
        username: props.username,
      }),
    );
    return user;
  }

  delete(): void {
    this.addEvent(
      new UserDeletedDomainEvent({
        aggregateId: this.id,
      }),
    );
  }

  validate(): void {
    // entity business rules validation to protect it's invariant before saving entity to a database
  }
}
