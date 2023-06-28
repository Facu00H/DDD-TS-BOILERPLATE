import Joi from 'joi';

export const NullsOrderSchema = Joi.string().valid(...["first","last"])