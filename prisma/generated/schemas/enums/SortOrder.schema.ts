import Joi from 'joi';

export const SortOrderSchema = Joi.string().valid(...["asc","desc"])