import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public index() {
    return 'getAll'
  }

  public show({ params, request }: HttpContextContract) {
    request.updateQs({ ...request.qs(), a: 'a', b: 'b' })
    console.log(request.qs())
    return 'get by id: ' + params.id
  }

  public async store({ request }: HttpContextContract) {
    await request.validate(PostValidator)

    request.updateBody({ ...request.body(), a: 'a', b: 'b' })
    console.log(request.except(['old']))
    // console.log(request.params())
    return 'create'
  }

  public update({ params }) {
    return 'update by id: ' + params.id
  }

  public destroy({ params }) {
    return 'delete by id: ' + params.id
  }
}
