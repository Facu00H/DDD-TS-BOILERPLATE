// @ts-nocheck
import Joi from 'joi';


export const NullableStringFieldUpdateOperationsInputSchemaObject = {
    set: Joi.alternatives().try(Joi.string())
}