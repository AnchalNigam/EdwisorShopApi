let shopConfig={};
shopConfig.port="3000";
shopConfig.allowedCorsOrigin="*";
shopConfig.env="dev";
shopConfig.db={
    uri:'mongodb://127.0.0.1:27017/edwisorShopDb'
}
shopConfig.apiVersion="/api/v1";

//Exporting my object properties
module.exports={
    port:shopConfig.port,
    allowedCorsOrigin:shopConfig.allowedCorsOrigin,
    env:shopConfig.env,
    db:shopConfig.db,
    apiVersion:shopConfig.apiVersion


}//end module exports