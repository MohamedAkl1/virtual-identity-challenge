import { Router } from "express";
import bodyParser from "body-parser";
import middleware from "./middleware/schema-validator";
import { UrlManager } from "./url-manager";

const urlManager = new UrlManager();
const routes = Router();

routes.use(bodyParser.json());

routes.post("/shorten", middleware(), (req, res) => {
  const urlToShorten = req.body.url;
  let result = urlManager.shorten(urlToShorten);
  return res.json({
    ...result,
    urlCode: `http://localhost:8000/${result.urlCode}`,
  });
});

routes.get("/:urlCode", (req, res) => {
  const code = req.params.urlCode;

  if (code) {
    const urlObject = urlManager.getOriginalUrl(code);
    if (urlObject) {
      res.redirect(urlObject.originalUrl);
    } else {
      return res.status(404).json("link not found");
    }
  } else {
    return res.status(500).json("no code was supplied");
  }
});

export default routes;
