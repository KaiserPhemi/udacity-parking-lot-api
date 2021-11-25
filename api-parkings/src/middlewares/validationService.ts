// third-party libraries
import Joi from 'joi';

// validates input user input
const validationService = {
  addParking: Joi.object({
    carRegNo: Joi.string().required(),
    ownerEmail: Joi.string().required(),
    parkedOn: Joi.string().required(),
  }),

  updateParking: Joi.object({
    removedOn: Joi.string(),
  })
}

export default validationService;
