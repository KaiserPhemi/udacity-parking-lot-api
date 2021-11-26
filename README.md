[![CircleCI](https://circleci.com/gh/KaiserPhemi/udacity-parking-lot-api.svg?style=svg)](https://app.circleci.com/pipelines/github/KaiserPhemi/udacity-parking-lot-api)

# udacity-parking-lot-api
A parking lot API to manage parking spaces in a facility

## Description
This is an API for managing parking spaces at a facility. It does not have a front-end yet.
It handles
- Car owner registraation
- Car registration
- Parking Activities/Transactions

Screenshot folder contains the screenshots of the following:
- Circle CI build
- Docker Hub Images

## Run Locally
- Clone the repo.
- Create the docker images by running `docker-compose -f docker-compose-build.yaml build --parallel` inside project's folder.
- Run `docker-compose up` to get the containers up & running.
- Make use of the environment variable in `set_env.sh` file



## API Endpoints
- `localhost:8080/api/v1`: Base end point
- `/cars`:
- `/users`:
- `/parkings`:


## Contributor
- Oluwafemi Akinwa

