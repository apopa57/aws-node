FROM 350179025345.dkr.ecr.us-west-2.amazonaws.com/node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
