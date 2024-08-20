FROM node:22

WORKDIR /app
COPY . .

RUN npm install -g serve
RUN npm i

EXPOSE 8080
CMD [ "serve", "-s", "dist"]