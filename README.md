# JWT based authorization for Nest.js

This is a code sample for my [article](https://trejgun.github.io/articles/jwt-based-authorization-for-nestjs)

## Installation

I assume you have node, yarn/npm and postgres

First of all you have to download dependencies
```bash
npm i
```

Then check config in
```bash
nano .env
```

and start in watch mode
```bash
npm run start
```

or in production mode
```bash
npm run build
npm run prod
```

## Docker

Otherwise you can use docker 

```shell script
docker-compose up --build
```

## Usage 

Create user

```gql
mutation createUser {
  createUser(input:{
    email: "me@google.com",
    password: "q1w2e3r4",
    roles: [Admin]
  }) {
    email,
    roles
  }
}
```

Get user

```gql
query getUser{
  getById(id: 1){
    email,
    roles
  }
}
```
