import { IInputFactory } from '../../../domain/inputFactory'
import { ICreateUserDTO } from '../../../domain/useCases/createUser/createUserDTO'
import { ICreateUserUseCase } from '../../../domain/useCases/createUser/createUserUseCase'

export class CreateUserUseCase extends ICreateUserUseCase {
  constructor(inputFactory: IInputFactory) {
    super(inputFactory)
  }

  async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = this.userRepository.getUserByEmail(data.email)

    if (!userAlreadyExists) {
      await this.userRepository.save(data)
    }

    throw new Error('User already exists')
  }
}
