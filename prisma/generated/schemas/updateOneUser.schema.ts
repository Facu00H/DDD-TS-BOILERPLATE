import Joi from 'joi';
import { UserUpdateInputSchemaObject, UserWhereUniqueInputSchemaObject } from './objects'

export const UserUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(UserUpdateInputSchemaObject), where: Joi.object().keys(UserWhereUniqueInputSchemaObject)  }).required()