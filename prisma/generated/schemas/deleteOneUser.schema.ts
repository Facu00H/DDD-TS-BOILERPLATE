import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './objects'

export const UserDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(UserWhereUniqueInputSchemaObject)  }).required()