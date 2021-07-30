## Description

API for searching addresses from `addresses.json`.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# search for CA
$ curl --location --request GET 'http://localhost:3000/api/search/CA'

# Query will be tokenized by space and will return all possible values
$ curl --location --request GET 'http://localhost:3000/api/search/CA San'
```
