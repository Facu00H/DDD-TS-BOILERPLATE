// @ts-nocheck
import Joi from 'joi';
import { NestedEnumRoleWithAggregatesFilterSchemaObject } from './NestedEnumRoleWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterSchemaObject } from './NestedEnumRoleFilter.schema'

export const EnumRoleWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumRoleWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumRoleFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumRoleFilterSchemaObject)
}