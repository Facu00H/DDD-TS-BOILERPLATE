// @ts-nocheck
import Joi from 'joi';
import { NestedEnumRoleFilterSchemaObject } from './NestedEnumRoleFilter.schema'

export const EnumRoleFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumRoleFilterSchemaObject))
}