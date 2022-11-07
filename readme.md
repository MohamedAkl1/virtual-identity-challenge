# Url Shortening service

A simple service for shortening Urls.

# Requirements

- `yarn` or `npm`

# Installation

`yarn` / `npm install`

# Running

`yarn start` / `npm start` will start the application at
[http://localhost:8000](http://localhost:8000) (set environment variable `PORT`
to change the port).

# Shortening a url

Perform a post request with the original url in the request body, The service should return the shortened link with the statistics of that specific link.

# Opening a shortened Url

Copy the link of any shortened link given back from the post request and open it in a browser. If the code doesn't exist, The page will return 404 Not found.
