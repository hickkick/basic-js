const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if(arr.length === 0) {
      return []
    }
    // arr.map((item,index) => {
    //   switch(item) {
    //     case '--discard-next':

    //     break;

    //     case '--discard-prev':

    //     break;

    //     case '--double-next':

    //     break;

    //     case '--double-prev':

    //     break;

    //     default:
    //       return item;
    //   }
    // });
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
            case '--discard-next':

            break;
    
            case '--discard-prev':
              result.pop();
            break;
    
            case '--double-next':
    
            break;
    
            case '--double-prev':
              result.push(result[length-1])
            break;
    
            default:
              result.push(arr[i])
          }
    }
  } else {
    throw 'THROWN'
  }

  return result;
  
};
