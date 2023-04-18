# PROJECT IINTRODUCTION
This is a simple CRUD API that allows users to create, read, update, and delete data from a database. The API is built using Node.js and Express, and uses MongoDB as the database.

# Requireement

* Node.js v14.16.1 or higher
* MongoDB


# Postman Documentation Link

# Installation

https://documenter.getpostman.com/view/21621604/2s93Xzwh6r

Clone the repository
Install dependencies using npm install

Create a .env file in the root directory and add your MongoDB connection string as MONGODB_URI

simply run 
```
npm run dev
```


# Endpoints
POST /api/createuser
Creates a new user in the database.

GET /api/getallusers
Returns all users.

GET /api/getuser/:id
Returns user with the specified ID

PUT /updateuser/:_id
Updates the user with the specified ID.

DELETE /api/deleteuser/:_id
Deletes userr with the specified ID.

GET /api/getallmaleuser/:gender
Returns only male user (Requires JWT authorisation)

# Authentication
Authentication is required at the getallmaleusers endpoint.

Users can create an account by sending a POST request to /api/createuser endpoint and can authenticate by sending a GET request to /api/getuser/:id.

Once authenticated, users can send requests with their token in the Authorization header to the getallmaleusers route.


# Error Handling
Errors are returned with appropriate HTTP status codes and error messages in the response body.


# Nupat-Intership-Task2
