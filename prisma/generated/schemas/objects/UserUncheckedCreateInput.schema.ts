// @ts-nocheck
import Joi from 'joi';


export const UserUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string())
}