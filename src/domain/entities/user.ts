import { v4 as uuidv4 } from 'uuid'
import { ICreateUserDTO } from '../useCases/createUser/createUserDTO'

export class User {
  private readonly _id: string
  public name: string
  public email: string

  constructor(data: ICreateUserDTO) {
    this.name = data.name
    this.email = data.email

    this._id = data.id ?? uuidv4()
  }

  get id(): string {
    return this._id
  }
}
