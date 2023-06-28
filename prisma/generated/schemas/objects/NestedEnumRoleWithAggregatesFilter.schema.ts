// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterSchemaObject } from './NestedEnumRoleFilter.schema'

export const NestedEnumRoleWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumRoleWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumRoleFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumRoleFilterSchemaObject)
}