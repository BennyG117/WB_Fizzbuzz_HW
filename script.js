
//Declare the function - first parameter is priority on L3)
function fizzBuzz(endNum = 100, startNum = 1) {

    //for statement - iterate from 1-100
    for (var i = startNum; i <= endNum; i++) {
        //if statement if multiple of 3 & 5 - purposely filtering off of specificity 
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        //else if multiple of 3 only - slighlty less specific
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        //else if multiple of 5 only - slighlty less specific
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        //else consolelog the number - the least specific/most general catch all
        else {
            console.log(i);
        }
    }
}

// call the function fizzBuzz
fizzBuzz();

