import Joi from 'joi';
import { UserWhereInputSchemaObject } from './objects'

export const UserDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(UserWhereInputSchemaObject)  }).required()