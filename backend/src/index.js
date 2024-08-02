import dotenv from 'dotenv';
import {app} from './app.js';
dotenv.config({path: './../.env'});

app.listen(process.env.PORT || 9000, ()=>{
    console.log(`Listening succesfully on Port ${process.env.PORT}`)
})