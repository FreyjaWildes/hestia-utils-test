# Hestia tech test
This is a take at home assignment for the Hestia project.

## How it works
It's a Node.js server (using express and busboy) allowing someone to upload a CSV file. It returns a
modified CSV file that is return by a call to a python library (see hestia-utils.py).

## What's been done
The functionality is implemented with code tests. There's a working Dockerfile to build an image of
the service listening on port 8080.
Tests are implemented using Mocha library and Chai-http in order to forge request to test the API
endpoints.

## What's missing
The load test is missing. I wanted to use the docker container and k6 load testing library.
