import express from 'express';
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import path from 'path';

import Razorpay from 'razorpay';

// process .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* The line `const key_id = process.env.API_KEY || 'default_key';` is assigning the value of the
environment variable `API_KEY` to the variable `key_id`. If the `API_KEY` environment variable is
not set, it will default to the value `'default_key'`. */
const key_id = process.env.API_KEY || 'default_key';
const key_secret = process.env.SECRET_KEY || 'default_secret_key';
// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({
  // Replace with your key_id
  key_id,
  // Replace with your key_secret
  key_secret,
});

/* The code `app.get('/', (req, res) => res.status(StatusCodes.OK).jsonp({ message: 'Hello from
server!' }))` is defining a route handler for the root URL ("/") of the server. */
app.get('/', (req, res) =>
  res.status(StatusCodes.OK).jsonp({
    message: 'Hello from server!',
  })
);

/**
 * The greet function takes a username as input and returns a greeting message.
 * @param username - The `username` parameter is a string that represents the name of the user.
 * @returns a greeting message that includes the username.
 */
const greet = (username) => {
  return `Hello ${username}! Welcome`;
};

app.post('/create-order', (req, res) => {
  // STEP 1:
  // const { amount, currency, receipt, notes } = req.body;
  var options = {
    amount: 500, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };
  razorpayInstance.orders.create(options, function (err, order) {
    console.log(order);
    return res.status(StatusCodes.OK).jsonp(order);
  });
});

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 http://localhost:${PORT}`)
);
