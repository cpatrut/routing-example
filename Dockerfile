FROM node:7
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 4200
#ADD . /angular2
##RUN cd  /angular2 && ls && ng s

CMD ["npm", "start"]
