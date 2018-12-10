### Node Authentication in TypeScript

#### Using 
 - JWT (For Stateless Auth)
 - Chai + Mocha (For Testing)
 - Redis (For In-Memory DB)
 - MongoDB + Mongoose (For Persistent DB) 
 - Express in TypeScript


To test this,

<h1> Run Docker Container</h1>

- Pull Docker Image 
```sh
$ cd nodets-mongojwt-chai
$ docker pull burningraven06/nodets-jwt-mongo-chai-rds

```
- Start Mongo Container
```sh
$ docker pull mongo
$ docker run --name <MONGO_INSTANCE> -d mongo
```

- Start Redis Container
```sh
$ docker pull redis
$ docker run --name <REDIS_INSTANCE> -d redis

# You may need to update your docker redis.conf
```

- Start App & Link Containers
```sh
$ docker run --name <APP_INSTANCE> --link <MONGO_INSTANCE_NAME>:mongo --link <REDIS_INSTANCE> -p 5000:4000 -d burningraven06/nodets-jwt-mongo-chai-rds

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
 
 - Update **src/app.ts** 
```sh
$ cd nodets-mongojwt-chai/src/   #Open app.ts

#Change Line 25
mongoDBConfig.dockerSetup()

# to
mongoDBConfig.localSetup()

```

 - Update **src/controllers/user/authenticate.ts** 
```sh
$ cd nodets-mongojwt-chai/src/controllers/user/   #Open authenticate.ts

#Change Line 9
var redisDB = redis.createClient(6379, "redis")

# to 
var redisDB = redis.createClient(6379, "localhost")
```


 - Update **src/controllers/user/refreshToken.ts** 
```sh
$ cd nodets-mongojwt-chai/src/controllers/user/   #Open refreshToken.ts

#Change Line 7
var redisDB = redis.createClient(6379, "redis")

# to 
var redisDB = redis.createClient(6379, "localhost")
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
