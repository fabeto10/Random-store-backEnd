const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(3);
const image = Joi.string().uri();

const createPorductSchema =Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updatePoroductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports =  {createPorductSchema, updatePoroductSchema, getProductSchema}
