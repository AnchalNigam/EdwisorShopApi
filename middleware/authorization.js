
//Route level middleware
/* Import*/
const logger = require('./../libs/loggerLib')
const response = require('./../libs/responseLib')
const check = require('./../libs/checkLib')
//end import


let isAuthenticated = (req, res, next) => {
    
  if (!check.isEmpty(req.query.authToken)) {
     
    if(req.query.authToken=="Admin"){
      
      next();
    }
    else{
      logger.error('Incorrect authentication token', 'Authentication Middleware', 5)
      let apiResponse = response.generate(true, 'Incorrect authentication token', 403, null)
      res.send(apiResponse)
    }
  } 
  else {
    logger.error('Authentication Token Missing', 'Authentication Middleware', 5)
    let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null)
    res.send(apiResponse)
  }
}//eny isAuthenticated function


//Export modules
module.exports = {
  isAuthenticated: isAuthenticated
}
