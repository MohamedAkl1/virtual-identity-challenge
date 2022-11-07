import Joi from "joi";
import Schema from "../Schema";

const middleware = (schema = Schema.shorten) => {
  return (req, res, next) => {
    const { error } = schema.url.validate(req.body.url);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      console.log("error: %j", error);
      res.status(400).json({ error: message });
    }
  };
};

export default middleware;
