let value;
let conversionWithToString;

// number to string
value = String(123);
console.log("$$ " +value + " - " + typeof value);

conversionWithToString = (123).toString();
console.log("## "+conversionWithToString + " - " + typeof conversionWithToString);


// floating to string
value = String(3.4);
console.log("$$ " + value + " - " + typeof value);

conversionWithToString = (3.4).toString();
console.log("## "+conversionWithToString + " - " + typeof conversionWithToString);

// boolean to string
value = String(true);
console.log("$$ " + value + " - " + typeof value);

conversionWithToString = (true).toString();
console.log("## "+conversionWithToString + " - " + typeof conversionWithToString);

// array to string
value = String([1,2,3,4,5]);
console.log("$$ " + value + " - " + typeof value);

conversionWithToString = ([1,2,3,4,5]).toString();
console.log("## "+conversionWithToString + " - " + typeof conversionWithToString);

// function to string
value = String(function(){console.log("I was a function")});
console.log("$$ " + value + " - " + typeof value);

// floating to string with toString() method
value = (function(){console.log("I was a function")}).toString;
console.log(value + " - " + typeof value);

