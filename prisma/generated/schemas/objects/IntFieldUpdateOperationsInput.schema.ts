// @ts-nocheck
import Joi from 'joi';


export const IntFieldUpdateOperationsInputSchemaObject = {
    set: Joi.number(),
  increment: Joi.number(),
  decrement: Joi.number(),
  multiply: Joi.number(),
  divide: Joi.number()
}