import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","createdAt","updatedAt","email","name","role"])