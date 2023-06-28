// @ts-nocheck
import Joi from 'joi';


export const NestedEnumRoleFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumRoleFilter'))
}