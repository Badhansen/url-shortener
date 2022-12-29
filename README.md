# URL Shortener

## Overview
There are two seperate applications. The Client which serves as Frontend(using React) and the API(using Node and Express).


## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. I have provided an example file `.env.example` please update it to your own in `.env` file without `.example`.

| Variable    | Description             |
| :---------- | :---------------------- |
| `MONGODB_URI` | MongoDB URI             |
| `BASE`      | Base URL for Shortening |

### References
* [How to connect to MongoDB Atlas using Node.js](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i)
## How to run the API Locally
Clone the project
```
git clone https://github.com/Badhansen/url-shortener.git
```
Go to project directory and navigate to the `api` directory.
```
cd url-shortener/api
```
Install all the dependencies
```
npm install
```
Now start the server
```
npm start
```
## API Reference

```http
  POST /api/short
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | Original Url |

**Example:**

```http
POST http://localhost:3333/api/short
Content-Type: application/json

{
    "origUrl": "https://leetcode.com/problems/single-threaded-cpu/"
}

```

### Get item

```http
  GET /:urlid
```

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| `urlid`      | `string` | Unique URL Code |

**Example:**

```http
GET http://localhost:3333/SvPAyo
```
## Test and Run the Backend
![](https://github.com/Badhansen/url-shortener/blob/master/docs/images/ulr%20shortener%20backend%20gif.gif)

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

---
# Resources and documentation I followed
* [Getting Started with Create React App](https://github.com/facebook/create-react-app)
* [How To Make create-react-app work with a Node Back-end API](https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/)
* [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
* [React frontend and a Node/Express backend and connect them](https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)
