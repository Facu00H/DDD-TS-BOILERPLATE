// @ts-nocheck
import Joi from 'joi';


export const NestedDateTimeFilterSchemaObject = {
    equals: Joi.date(),
  lt: Joi.date(),
  lte: Joi.date(),
  gt: Joi.date(),
  gte: Joi.date(),
  not: Joi.alternatives().try(Joi.link('#NestedDateTimeFilter'))
}