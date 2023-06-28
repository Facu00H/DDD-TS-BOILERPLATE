// @ts-nocheck
import Joi from 'joi';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterSchemaObject } from './NestedStringNullableFilter.schema'

export const NestedStringNullableWithAggregatesFilterSchemaObject = {
    equals: Joi.alternatives().try(Joi.string()),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  contains: Joi.string(),
  startsWith: Joi.string(),
  endsWith: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.link('#NestedStringNullableWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedStringNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedStringNullableFilterSchemaObject)
}