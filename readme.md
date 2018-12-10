### Node Authentication in TypeScript

#### Using 
 - JWT (For Stateless Auth)
 - Chai + Mocha (For Testing)
 - Redis (For In-Memory DB)
 - MongoDB + Mongoose (For Persistent DB) 
 - Express in TypeScript


To test this,

<h1> Run Docker Container</h1>

- Build Docker Image 
```sh
$ cd nodets-mongojwt-chai
$ docker build -t <APP_IMAGE_NAME> . 

```
- Start Mongo Container
```sh
$ docker run --name <MONGO_INSTANCE> -d mongo
```

- Start Redis Container
```sh
$ docker run --name <REDIS_INSTANCE> -d redis
```

- Start App & Link Containers
```sh
$ docker run --name <APP_INSTANCE> --link <MONGO_INSTANCE_NAME>:mongo --link <REDIS_INSTANCE> -p 5000:4000 -d <APP_IAMGE_NAME>

# Visit localhost:5000 
```

<h1> Run App Locally</h1>

<h3> Create Necessary Files </h3>

 - Create DBKeys

```sh
$ cd nodets-mongojwt-chai
$ touch src/keys/dbKeys.ts
```

 - Update DBKEys
```sh
const dbKeys = {
  mongoLocalUrl : <YOUR_MONGODB_URI>,
  mongoDockerURL : ""
}

export default dbKeys
```

 - Create JWTSecrets
```sh
$ cd nodets-mongojwt-chai
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
 
 - Update src/app.ts
```sh
$ cd nodets-mongojwt-chai

#Change Line 25
mongoDBConfig.dockerSetup()

# to
mongoDBConfig.localSetup()

```

<h3> INSTALL PACKAGE DEPENDENCIES</h3>

```sh
$ cd nodets-mongojwt-chai
$ yarn install
# or with npm

$ npm install
```


<h3> RUN TESTS</h3>

```sh
$ cd nodets-mongojwt-chai
$ yarn run watch-test-ts
```

<h3> RUN APP in DEV Mode</h3>

```sh
$ cd nodets-mongojwt-chai
$ yarn run watch-ts
$ yarn run watch-js
```

<h3> RUN IN PROD Mode</h3>

```sh
$ cd nodets-mongojwt-chai
$ yarn start
```
