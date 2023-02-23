import { IDatabaseRepository } from '../../../../domain/repositories/databaseRepository'
import { UserRepository } from './userRepository'

export class DatabaseRepository implements IDatabaseRepository {
  get getUserRepository() {
    return new UserRepository()
  }
}
