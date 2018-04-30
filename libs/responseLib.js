//standardizing the response of my edwisor shop api
let generate=(err,message,status,data)=>{
    let apiResponse={
        error:err,
        message:message,
        status:status,
        data:data
    }
   return apiResponse;
   } //end standardizing function
   
   module.exports={
       generate:generate
   }