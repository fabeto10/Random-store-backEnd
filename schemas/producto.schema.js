const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(3);

const createPorductSchema =Joi.object({
  name: name.required(),
  price: price.required(),
});

const updatePoroductSchema = Joi.object({
  name: name,
  price: price
});

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports =  {createPorductSchema, updatePoroductSchema, getProductSchema}
