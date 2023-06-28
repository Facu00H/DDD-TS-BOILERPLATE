// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedFloatFilterSchemaObject } from './NestedFloatFilter.schema'

export const NestedIntWithAggregatesFilterSchemaObject = {
    equals: Joi.number(),
  in: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  lt: Joi.number(),
  lte: Joi.number(),
  gt: Joi.number(),
  gte: Joi.number(),
  not: Joi.alternatives().try(Joi.number(),
Joi.link('#NestedIntWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _avg: Joi.object().keys(NestedFloatFilterSchemaObject),
  _sum: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedIntFilterSchemaObject),
  _max: Joi.object().keys(NestedIntFilterSchemaObject)
}