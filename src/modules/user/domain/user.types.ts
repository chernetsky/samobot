// Properties that are needed for a user creation
export interface CreateUserProps {
  id: string;
  username: string;
}

// All properties that a User has
export interface UserProps extends Omit<CreateUserProps, 'id'> {}
