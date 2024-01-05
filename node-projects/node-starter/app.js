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

app.get('/', (req, res) =>
  res.status(StatusCodes.OK).jsonp({
    message: 'Hello from server!',
  })
);

app.post('/create-order', (req, res) => {
  // STEP 1:
  // const { amount, currency, receipt, notes } = req.body;

  // STEP 2:
  // razorpayInstance.orders.create(
  //   { amount, currency, receipt, notes },
  //   (err, order) => {
  //     //STEP 3 & 4:
  //     if (!err) res.json(order);
  //     else res.send(err);
  //   }
  // );

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
