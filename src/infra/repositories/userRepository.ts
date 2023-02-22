import { User } from '../../domain/entities/user'
import { IUserRepository } from '../../domain/repositories/userRepository'

export class UserRepository implements IUserRepository {
  async save(data: any): Promise<void> {
    console.log(data)
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return null
  }
}
