// @ts-nocheck
import Joi from 'joi';
import { NestedDateTimeWithAggregatesFilterSchemaObject } from './NestedDateTimeWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedDateTimeFilterSchemaObject } from './NestedDateTimeFilter.schema'

export const DateTimeWithAggregatesFilterSchemaObject = {
    equals: Joi.date(),
  lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.object().keys(NestedDateTimeWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedDateTimeFilterSchemaObject),
  _max: Joi.object().keys(NestedDateTimeFilterSchemaObject)
}