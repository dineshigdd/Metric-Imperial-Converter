/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result =  input.match(/\d[\/\d.]*|\d/);
    //https://stackoverflow.com/questions/21443364/regex-to-match-integers-decimals-and-fractions
    
  //if input has ONLY numercal values and Math operators
    var RegEx = RegExp('[A-Z|[a-z]','g');
    var isNonNumericInput = RegEx.test(input);
    console.log("nonNumericInput:" + nonNumericInput)
    if( !isNonNumericInput ){
      res
    }
    
   
    //else "error"
    
       // var result =  input.match(/\d+[\/\d.]*|\d/);
    //input.match(/\d+\.?\d+\/?\d+\.?\d+/); my effort   
    console.log("converthandler:" + result);
     return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
