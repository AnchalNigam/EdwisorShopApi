//space removal
let trim = (x) => {
    let value = String(x);
    return value.replace(/\s/gi, '');
  }//end 
  
  //checking vallue is null,undefined,empty or not
  let isEmpty = (value) => {
    if (value === null || value === undefined || trim(value) === '' || value.length === 0) {
      return true
    } else {
      return false
    }
  }//end
  
 //exporting my isempty function
  module.exports = {
    isEmpty: isEmpty
  }
  