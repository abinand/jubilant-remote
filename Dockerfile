FROM node:current-alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install -g yarn

RUN yarn --prod

COPY . .

EXPOSE 8000

CMD ["npm", "start"]