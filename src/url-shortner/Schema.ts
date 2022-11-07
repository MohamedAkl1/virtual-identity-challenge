import Joi from "joi";

const Schema = {
  shorten: {
    url: Joi.string().uri(),
  },
};

export default Schema;
