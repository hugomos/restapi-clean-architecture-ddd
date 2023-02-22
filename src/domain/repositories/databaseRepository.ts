import { IUserRepository } from './userRepository'

export interface IDatabaseRepository {
  get getUserRepository(): IUserRepository;
}
