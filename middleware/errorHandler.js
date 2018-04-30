const response = require('./../libs/responseLib');
let errorHandler = (err,req, res, next) => {
    console.log("application error handler called");
    console.log(err);
    let errorHandle=response.generate(true,"Some error occured at global level",404,null)
    res.send(errorHandle);
    
    
}// end request ip logger function 

let notFoundHandler = (req,res,next)=>{

    console.log("Global not found handler called");
    let errorHandle=response.generate(true,"Route not found in the application",404,null)
    res.send(errorHandle);

}// end not found handler

module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}
