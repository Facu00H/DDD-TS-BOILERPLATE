import Joi from 'joi';
import { UserCreateInputSchemaObject } from './objects'

export const UserCreateSchema = Joi.object().keys({ data: Joi.object().keys(UserCreateInputSchemaObject)  }).required()