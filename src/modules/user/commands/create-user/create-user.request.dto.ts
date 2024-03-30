import {
  IsAlphanumeric,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserRequestDto {
  @MaxLength(10)
  @MinLength(4)
  @IsAlphanumeric()
  readonly id: string;

  @MaxLength(320)
  @MinLength(5)
  @IsString()
  readonly username: string;
}
