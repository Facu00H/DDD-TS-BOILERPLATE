import Joi from 'joi';
import { UserWhereInputSchemaObject, UserOrderByWithAggregationInputSchemaObject, UserScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { UserScalarFieldEnumSchema } from './enums'

export const UserGroupBySchema = Joi.object().keys({ where: Joi.object().keys(UserWhereInputSchemaObject), orderBy: Joi.object().keys(UserOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(UserScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(UserScalarFieldEnumSchema).required()  }).required()