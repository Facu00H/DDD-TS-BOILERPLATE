import Joi from 'joi';

export const TransactionIsolationLevelSchema = Joi.string().valid(...["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"])