import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

app.use(bodyParser.json({ limit: "30mb", extened: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extened: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Recollectionapp:Recollectionapp123@cluster0.nrijuml.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedToplogy: true })
    .then(() => app.listen(PORT, () => console.log( `Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.essage));
mongoose.set('useFindAndModify', false);