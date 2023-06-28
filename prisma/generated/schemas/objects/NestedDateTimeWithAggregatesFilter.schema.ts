// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedDateTimeFilterSchemaObject } from './NestedDateTimeFilter.schema'

export const NestedDateTimeWithAggregatesFilterSchemaObject = {
    equals: Joi.date(),
  lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.link('#NestedDateTimeWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedDateTimeFilterSchemaObject),
  _max: Joi.object().keys(NestedDateTimeFilterSchemaObject)
}