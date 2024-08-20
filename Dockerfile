FROM node:22

WORKDIR /app
COPY . .

RUN npm install -g http-server
RUN npm i

EXPOSE 8080
CMD [ "http-server", "dist", "-p", "8080"]