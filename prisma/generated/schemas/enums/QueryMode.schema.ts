import Joi from 'joi';

export const QueryModeSchema = Joi.string().valid(...["default","insensitive"])