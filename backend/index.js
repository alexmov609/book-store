import expess, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = expess();

//Middleware for parsing request body (json)
app.use(expess.json());

//Cors first option. Allow all origins with default of cors(*)
// Option 1
app.use(cors());

// // Option 2
// app.use(
//   cors({
//     origin:'http://127.0.0.1:3000',
//     method:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )

app.get("/", (request, response) => {
  return response.status(234).send(`Welcome to root`);
});

app.use('/books',booksRoute);



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Successfull conected to database");

    app.listen(PORT, () => {
      console.log(`App is listen on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
