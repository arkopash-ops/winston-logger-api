# Winston Logger API

A simple REST API built with Node.js, TypeScript, and Express, featuring structured logging using [Winston](https://www.npmjs.com/package/winston).


---

## Project Structure

```text
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

## Log Files

- Logs are stored in the `logs/` directory.

```text
logs/
├── combined.log
└── error.log
```

- *combined.log* → contains all logs (info + error)
- *error.log* → contains only error logs


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

## API Endpoints

### 1. Create User
```http
POST http://localhost:8080/users/
content-type: application/json

{
  "name": "Aryan",
  "email": "aryan@mail.com"
}
```

### 2. Get All Users
```http
GET http://localhost:8080/users/
content-type: application/json
```


---

## Example Logs

### 1. Server Startup
- When the server starts and the database connects:
`combined.log`
```json
{"level":"info","message":"Server running on port 8080","timestamp":"2026-03-16T10:37:41.702Z"}
{"level":"info","message":"MongoDB connected","timestamp":"2026-03-16T10:37:41.726Z"}
```

### 2. Create User (Success)
- When a new user is successfully created:
`combined.log`
```json
{"level":"info","message":"User created","timestamp":"2026-03-16T10:38:27.400Z","userId":"69b7dda3b7d8b25780c481fa"}
```

### 3. Create User (Duplicate Email)
- When trying to create a user with an existing email:
`combined.log`
```json
{"level":"error","message":"Email already exists","timestamp":"2026-03-16T10:39:44.730Z"}
```

`error.log`
```json
{"level":"error","message":"Email already exists","timestamp":"2026-03-16T10:39:44.730Z"}
```

### 4. Get All Users (Users Found)
- When users exist in the database:
`combined.log`
```json
{"count":1,"level":"info","message":"Fetched all users","timestamp":"2026-03-16T10:40:17.615Z"}
```

### 5. Get All Users (No Users)
- When no users exist in the database:
`combined.log`
```json
{"level":"error","message":"There are 0 users.","timestamp":"2026-03-16T10:41:22.511Z"}
{"count":0,"level":"info","message":"Fetched all users","timestamp":"2026-03-16T10:41:22.511Z"}
```

`error.log`
```json
{"level":"error","message":"There are 0 users.","timestamp":"2026-03-16T10:41:22.511Z"}
```


---

***Built for learning and experimenting with Winston logging***