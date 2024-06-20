const path = require('path');
const express = require('express');
require('./db/mongoose'); 
const UserRouter = require('./routers/user');
const TaskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

app.use(UserRouter);
app.use(TaskRouter);

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})