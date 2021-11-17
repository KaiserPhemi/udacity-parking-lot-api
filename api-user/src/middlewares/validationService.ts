// third-party libraries
import Joi from 'joi';

// validates input user input
const validationService = {
  addUser: Joi.object({
    name: Joi.string().required(),
    phoneNumber: Joi.string().alphanum().max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(8).required(),
  }),
  login: Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(8).required(),
  })
}

export default validationService;
