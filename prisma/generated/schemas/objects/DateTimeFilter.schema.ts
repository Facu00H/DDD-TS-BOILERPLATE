// @ts-nocheck
import Joi from 'joi';
import { NestedDateTimeFilterSchemaObject } from './NestedDateTimeFilter.schema'

export const DateTimeFilterSchemaObject = {
    equals: Joi.date(),
  lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.object().keys(NestedDateTimeFilterSchemaObject))
}