import { ICreateUserDTO } from '../../../domain/useCases/createUser/createUserDTO'
import { ICreateUserUseCase } from '../../../domain/useCases/createUser/createUserUseCase'

export class CreateUserController {
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  async handle(data: ICreateUserDTO): Promise<void> {
    await this.createUserUseCase.execute(data)
  }
}
