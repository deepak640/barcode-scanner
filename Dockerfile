FROM node:22.10.0

COPY src src
COPY public public
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

ENTRYPOINT [ "npm","start" ]
