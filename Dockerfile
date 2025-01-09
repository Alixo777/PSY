FROM node:23-alpine

WORKDIR /app

COPY ./app.js .
COPY ./models ./models
COPY ./db ./db
COPY ./routes ./routes
COPY ./package.json .

RUN npm install
CMD npm start