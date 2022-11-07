import { UrlDBAccess } from "./url-db-access";

let urlDBAccess: UrlDBAccess;

export class UrlManager {
  constructor() {
    urlDBAccess = new UrlDBAccess();
  }

  public shorten = (url: string) => {
    let shortenedObject = urlDBAccess.getUrl(url);
    if (shortenedObject) {
      urlDBAccess.incrementShortenCount(url);
    } else {
      shortenedObject = urlDBAccess.createShortenedUrl(url);
    }
    return shortenedObject;
  };

  public getOriginalUrl = (urlCode: string) => {
    const originalUrlObject = urlDBAccess.getOriginalUrlObject(urlCode);
    if (originalUrlObject) {
      urlDBAccess.incrementVisitsCount(urlCode);
      return originalUrlObject;
    } else {
      return undefined;
    }
  };
}
