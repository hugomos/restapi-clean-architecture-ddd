import { IInputFactory } from '../../inputFactory'
import { IUserRepository } from '../../repositories/userRepository'
import { ICreateUserDTO } from './createUserDTO'

export abstract class ICreateUserUseCase {
  readonly userRepository: IUserRepository

  constructor(inputFactory: IInputFactory) {
    this.userRepository = inputFactory.databaseRepository.getUserRepository
  }

  abstract execute(input: ICreateUserDTO): Promise<void>
}
