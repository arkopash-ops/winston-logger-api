# Winston Logger API

A simple REST API built with Node.js, TypeScript, and Express, featuring structured logging using [Winston](https://www.npmjs.com/package/winston).


---

## Project Structure

```
winston-logger-api
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── user.controller.ts
│   ├── routes
│   │   └── user.routes.ts
│   ├── middlewares
│   │   └── logger.middleware.ts
│   ├── utils
│   │   └── logger.ts
│   ├── models
│   │   └── user.model.ts
│   ├── app.ts
│   └── server.ts
├── logs
├── package.json
└── tsconfig.json
```


---

## Features

- Structured logging using **Winston**
- Organized project structure with TypeScript
- Middleware for logging requests and errors
- RESTful API design
- Database connection setup (MongoDB/PostgreSQL/etc.)


---


## Usage
- API endpoints are defined in `src/routes`.
- Logging is handled in `src/middlewares/logger.middleware.ts` and `src/utils/logger.ts`.
- Logs are saved to the `logs/` directory.


---

***Built for learning and experimenting with Winston logging***