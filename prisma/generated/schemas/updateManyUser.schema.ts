import Joi from 'joi';
import { UserUpdateManyMutationInputSchemaObject, UserWhereInputSchemaObject } from './objects'

export const UserUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(UserUpdateManyMutationInputSchemaObject), where: Joi.object().keys(UserWhereInputSchemaObject)  }).required()