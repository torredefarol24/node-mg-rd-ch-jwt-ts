### Node Authentication in TypeScript

#### Using 
 - JWT (For Stateless Auth)
 - Chai + Mocha (For Testing)
 - Redis (For In-Memory DB)
 - MongoDB + Mongoose (For Persistent DB) 
 - Express in TypeScript


To test this,

<h3> Create Ncessary Files </h3>

 - Create DBKeys

```sh
$ cd nodeJWT
$ touch src/keys/dbKeys.ts
```

 - Update DBKEys
```sh
const dbKeys = {
  mongoLocalUrl : <YOUR_MONGODB_URI>
}

export default dbKeys
```

 - Create JWTSecrets
```sh
$ cd nodeJWT
$ touch src/keys/jwtSecret.ts
```

 - Update JWTSecrets
```sh
const jwtKeys = {
  tokenSecret : <YOUR_TOKEN_SECRET>,
  resfreshTokenSecret : <YOUR_REFRESHTOKEN_SECRET>
}

export default jwtKeys
```

<h3> INSTALL PACKAGE DEPENDENCIES</h3>

```sh
$ cd nodeJWT
$ yarn install
# or with npm

$ npm install
```


<h3> RUN TESTS</h3>

```sh
$ cd nodeJWT
$ yarn run watch-test-ts
```

<h3> RUN APP in DEV Mode</h3>

```sh
$ cd nodeJWT
$ yarn run watch-ts
$ yarn run watch-js
```

<h3> RUN IN PROD Mode</h3>

```sh
$ cd nodeJWT
$ yarn start
```