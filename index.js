//Import
const express = require('express');
const path = require('path');
const shopConfig=require('./config/shopConfig');
const mongoose=require('./node_modules/mongoose');
const fs=require('fs');
const cookieParser = require('./node_modules/cookie-parser');
const bodyParser = require('./node_modules/body-parser');
const globalErrorMiddleware = require('./middleware/errorHandler');
const routeLoggerMiddleware = require('./middleware/routeLogger');

const helmet = require('helmet');
//import end

//Instance of express
const app = express();
//end

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());


app.use(globalErrorMiddleware.globalErrorHandler);
app.use(routeLoggerMiddleware.logIp);
app.use('/edwisorShopDoc',express.static(path.join(__dirname, 'edwisorShopDoc')));
app.use('/',express.static(path.join(__dirname, 'readme')));

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js')!=-1) {
        
        require(modelsPath + '/' + file);
    }
  })
  // end Bootstrap models
  
//Importing my routes
let routePath="./routes";
fs.readdirSync(routePath).forEach(function(file){
    if(file.indexOf('.js')!=-1){
       
        let route=require(routePath+ '/' + file);
        route.setRouter(app);
    }
});//routes import end


// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler)

// end global 404 handler

//listening port and establishing database connection
app.listen(shopConfig.port, () => {
    
    console.log('Example app listening on port 3001!');
    let db=mongoose.connect(shopConfig.db.uri);

});//end connection part

//handling mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('Database connection error');
    console.log(err);

});//end handler

//handling mongoose success event
mongoose.connection.on('open',function(err){
   if(err){
       console.log("database  connectionerror");
       console.log(err);
   }
   else{
       console.log("Database connection successful!");
   }
});//end handler


