FROM node:14-alpine

WORKDIR /api

COPY package*.json ./

RUN apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \
    && npm install 
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve"]