import { ICreateUserDTO } from '../../../domain/useCases/createUser/createUserDTO'
import { ICreateUserUseCase } from '../../../domain/useCases/createUser/createUserUseCase'
import { CreateUserUseCase } from './createUserUseCase'
import { InputFactory } from '../../../main/factories/inputFactory'

export class CreateUserController {
  private readonly createUserUseCase: ICreateUserUseCase

  constructor() {
    this.createUserUseCase = new CreateUserUseCase(new InputFactory())
  }

  async handle(data: ICreateUserDTO): Promise<any> {
    const response = await this.createUserUseCase.execute(data)
    return response
  }
}
