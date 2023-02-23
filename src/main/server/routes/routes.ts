import { Router, Request, Response } from 'express'
import { CreateUserController } from '../../../application/useCases/createUser/createUserController'
import { ICreateUserDTO } from '../../../domain/useCases/createUser/createUserDTO'

const router = Router()

router.post('/users', async (req: Request, res: Response) => {
  const data = req.body as ICreateUserDTO

  const userController = new CreateUserController()
  const response = await userController.handle(data)

  return res.json(response)
})

export { router }
