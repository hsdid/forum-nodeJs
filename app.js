const express       = require('express');
const app           = express();
const { castArray } = require('lodash'      );
const dotenv        = require('dotenv'      );
const models        = require('./models'    );
const dependecies   = require('./dependecies/repository');


//Import Routes 
const authRoute                         = require('./routes/auth');
const postRoute                         = require('./routes/post');
const commnetRoute                      = require('./routes/comment');


app.use(express.json());

//Route prefix
app.use('/api/user', authRoute(dependecies));
app.use('/api/post', postRoute(dependecies));
app.use('/api/post', commnetRoute(dependecies));

dotenv.config();


app.listen({ port: 5000 }, async () => {
    console.log('Server running');
    //await sequelize.sync({ force: true });
    await models.sequelize.authenticate();
})
    
