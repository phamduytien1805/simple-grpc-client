# simple-grpc-client

This is simple chat room using grpc for HCMUS project. <br>
The goal of this project is to understand how GRPC protocol works.

## Prerequisite
```bash
# Build dockor envoy
$ docker build -t grpc-web-react .
# Run docker
$ docker run -d --name grpc-web-react -p 8080:8080 -p 9901:9901 grpc-web-react

## Running multiple port (currently 5 port)
$ npm run start:multiport
or
$ yarn run start:multiport


## Running the app

```bash
# development
$ npm run start
or
$ yarn run start

## Running multiple port (currently 5 port)
$ npm run start:multiport
or
$ yarn run start:multiport
