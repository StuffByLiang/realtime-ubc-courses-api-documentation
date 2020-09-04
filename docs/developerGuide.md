---
id: developerGuide
title: Developer Guide
---

## Getting started

Download the following to get started programming

https://nodejs.org/en/
https://www.postman.com/

create a `.env` file. refer to `.env copy`. put in your mongo_uri in there.

run

```
npm start
```

or 

```
npm run dev
```

for development

## Technologies

- Node.js
- Jest / SuperTest (for testing suite)
- Express (web server for REST API)
- TypeScript
  - adds static typing
  - adds signatures to the functions directly
- Cheerio (for web scraping). Works like jQuery

## Quick guide of how the API is coded

`src/models/pages/` contains interfaces of all data that can be found on the various pages within the ssc scheduler.

`src/util/scraper/` contains the website scraping logic that turns the website into the typescript interfaces specified in `src/models/pages`

`src/util/CourseScraper.ts` is an abstraction that uses these scraper classes to turn the obtained data into usable


## Testing

`tests/` contains unit tests

`tests/routes.test.ts` tests our endpoints

run

```
npm run test
```

to test, and for a coverage report run

```
npm run coverage
```