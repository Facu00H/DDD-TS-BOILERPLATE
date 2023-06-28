// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema'

export const SortOrderInputSchemaObject = {
    sort: SortOrderSchema,
  nulls: NullsOrderSchema
}