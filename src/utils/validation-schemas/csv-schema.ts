import Joi from "joi";

export const csvSchema = Joi.object({
  csv: Joi.required(),
});
