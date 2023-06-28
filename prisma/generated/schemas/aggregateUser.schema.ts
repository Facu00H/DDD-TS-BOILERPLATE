import Joi from 'joi';
import { UserWhereInputSchemaObject, UserOrderByWithRelationInputSchemaObject, UserWhereUniqueInputSchemaObject } from './objects'

export const UserAggregateSchema = Joi.object().keys({ where: Joi.object().keys(UserWhereInputSchemaObject), orderBy: Joi.object().keys(UserOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(UserWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()