import { v4 as uuidv4 } from 'uuid'
import { ICreateUserDTO } from '../useCases/createUser/createUserDTO'

export class User {
  public readonly id: string
  public name: string
  public email: string

  constructor(data: ICreateUserDTO) {
    this.name = data.name
    this.email = data.email

    this.id = data.id ?? uuidv4()
  }
}
