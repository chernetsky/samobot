import { RepositoryPort } from '@libs/ddd';
import { UserEntity } from '../domain/user.entity';

export interface UserRepositoryPort extends RepositoryPort<UserEntity> {
  findOneByUsername(email: string): Promise<UserEntity | null>;
}
