import { User } from '../entities/user'
import { ICreateUserDTO } from '../useCases/createUser/createUserDTO'

export interface IUserRepository {
  save(user: ICreateUserDTO): Promise<void>;
  getUserByEmail(email: string): Promise<User | null>
}
