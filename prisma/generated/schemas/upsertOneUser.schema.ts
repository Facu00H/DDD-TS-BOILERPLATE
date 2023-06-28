import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject, UserCreateInputSchemaObject, UserUpdateInputSchemaObject } from './objects'

export const UserUpsertSchema = Joi.object().keys({ where: Joi.object().keys(UserWhereUniqueInputSchemaObject), data: Joi.object().keys(UserCreateInputSchemaObject), update: Joi.object().keys(UserUpdateInputSchemaObject)  }).required()