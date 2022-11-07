import shortid from "shortid";
import db from "./database";
import { Url } from "./url";

export class UrlDBAccess {
  public createShortenedUrl = (url: string) => {
    const obj: Url = {
      originalUrl: url,
      urlCode: shortid.generate(),
      shortenedCount: 1,
      visitsCount: 0,
    };
    db.push(obj);
    return obj;
  };

  public getUrl = (url: string) => {
    const index = db.findIndex((obj) => obj.originalUrl === url);
    if (index !== -1) return db[index];
    return undefined;
  };

  public incrementShortenCount = (url: string) => {
    const index = db.findIndex((obj) => obj.originalUrl === url);
    if (index !== -1) {
      db[index].shortenedCount++;
    }
  };

  public getOriginalUrlObject = (urlCode: string) => {
    const index = db.findIndex((obj) => obj.urlCode === urlCode);
    if (index !== -1) return db[index];
    return undefined;
  };

  public incrementVisitsCount = (urlCode: string) => {
    const index = db.findIndex((obj) => obj.urlCode === urlCode);
    if (index !== -1) {
      db[index].visitsCount++;
    }
  };
}
