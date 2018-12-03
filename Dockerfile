FROM redis:latest
COPY redis.conf /usr/local/etc/redis/redis.conf
EXPOSE 6379
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]

FROM node:10.13.0
WORKDIR /usr/source/app
COPY package.json ./
RUN yarn install
COPY . . 
EXPOSE 4000
CMD ["yarn", "start"]

