import { User } from '../../../domain/entities/user'
import { IInputFactory } from '../../../domain/inputFactory'
import { ICreateUserDTO } from '../../../domain/useCases/createUser/createUserDTO'
import { ICreateUserUseCase } from '../../../domain/useCases/createUser/createUserUseCase'

export class CreateUserUseCase extends ICreateUserUseCase {
  constructor(inputFactory: IInputFactory) {
    super(inputFactory)
  }

  async execute(data: ICreateUserDTO): Promise<any> {
    const user = new User(data)
    const userAlreadyExists = await this.userRepository.getUserByEmail(user.email)

    if (!userAlreadyExists) {
      await this.userRepository.save(user)
      return {
        message: 'User created successfully',
        user
      }
    }

    return {
      message: 'User already exists'
    }
  }
}
