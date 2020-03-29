# appsync-amplify-basic-setup
This repository contains a basic setup using Amplify (Framework based on Amazon Web Services AppSync)


## Requisites

* Node:
    * install nvm (https://github.com/nvm-sh/nvm)
    * nvm install 12.0.0
    * nvm use

* Java 11

* Amplify CLI
    * npm install -g @aws-amplify/cli

## Setup

* AWS Config file
    * If not already exists, create a new one:
        * touch /Users/{myUserName}/.aws/config

* Project absolute path
    * Go in the following file and change "projectPath" value with the absolute path of your project folder
        * ./appsync-amplify-basic-setup/amplify/.config/local-env-info.json

## Build & Run

* Run whole application locally:
    * amplify mock
    * URL:
        * graphQL endpoint: http://localhost:20002/

## Example:

* Query:
    * try running following query and see the result:

```
    query MyQuery {
        getComment(input: 1)
    }
```

or

```
    query MyQuery {
        getComment(input: 30)
    }
```
