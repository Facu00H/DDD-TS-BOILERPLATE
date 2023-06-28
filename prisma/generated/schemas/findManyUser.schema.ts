import Joi from 'joi';
import { UserWhereInputSchemaObject, UserOrderByWithRelationInputSchemaObject, UserWhereUniqueInputSchemaObject } from './objects';
import { UserScalarFieldEnumSchema } from './enums'

export const UserFindManySchema = Joi.object().keys({ where: Joi.object().keys(UserWhereInputSchemaObject), orderBy: Joi.object().keys(UserOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(UserWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(UserScalarFieldEnumSchema)  }).required()