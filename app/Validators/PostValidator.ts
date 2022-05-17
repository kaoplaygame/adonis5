import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    lastname: schema.string(),
    old: schema.number.optional(),
    members: schema.array().members(schema.string()),
  })

  public messages = {}
}
