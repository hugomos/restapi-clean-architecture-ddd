import { User } from '../../../../domain/entities/user'
import { IUserRepository } from '../../../../domain/repositories/userRepository'
import { prisma } from '../client'

export class UserRepository implements IUserRepository {
  async save(data: User): Promise<void> {
    await prisma.user.create({
      data
    })
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (!user) {
      return null
    }

    return user
  }
}
