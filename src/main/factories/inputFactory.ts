import { IInputFactory } from '../../domain/inputFactory'
import { IDatabaseRepository } from '../../domain/repositories/databaseRepository'
import { DatabaseRepository } from '../../infra/database/prisma/repositories/databaseRepository'

export class InputFactory implements IInputFactory {
  public readonly databaseRepository: IDatabaseRepository

  constructor() {
    this.databaseRepository = new DatabaseRepository()
  }
}
