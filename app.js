// var a = 1.723;
// var b = Math.round(a);
// console.log(b);


// var a = 1.123;
// var b = Math.ceil(a);
// console.log(b);


// var a = 1.823;
// var b = Math.floor(a);
// console.log(b);


// var a = Math.random();
// var b = Math.ceil(a * 6);
// console.log(b); 


// var a = "100.12";
// a = Number(a);
// a = parseInt(a);
// a = parseFloat(a);
// a = +a;
// console.log(a)


// var a = 102;
// a = a.toString();
// console.log(a);


// var a = 10.333339;
// a = a.toFixed(3);
// console.log(a);


// var a = 10;
// a = a.toFixed(3);
// console.log(a);


// var rightNow = new Date();
// console.log(rightNow);

// var year = rightNow.getFullYear();
// console.log("year =",year);

// var month = rightNow.getMonth();
// console.log("month =",month);

// var day = rightNow.getDay();
// console.log("day =",day);

// var date = rightNow.getDate();
// console.log("date =",date);

// var hours = rightNow.getHours();
// console.log("hourse =",hours);

// var minutes = rightNow.getMinutes();
// console.log("minutes =",minutes);

// var sec = rightNow.getSeconds();
// console.log("Seconds =",sec);

// var miliSec = rightNow.getMilliseconds();
// console.log("miliSeconds =",miliSec);

// var time = rightNow.getTime();
// console.log("time =",time);


// specific date time ki detail

// var currentDate = new Date('01-01-2000 05:30:45');
// console.log(currentDate);


// var currentDate = new Date();

// var setYear = currentDate.setFullYear(2021);
// console.log(setYear);

// var setDate = currentDate.setDate((new Date()).getDate() - 10);
// console.log(setDate);

// var setMonth = currentDate.setMonth(2);
// console.log(setMonth);

// var setHours = currentDate.setHours(6);
// console.log(setHours);

// var setMinutes = currentDate.setMinutes(10);
// console.log(setMinutes);

// var setSec = currentDate.setSeconds(15);
// console.log(setSec);

// console.log(currentDate);



// functions


// function abc() {
//     // alert("abc");
//     var a = 10;
//     console.log(a);
// }

// abc();


// function abc(a) {
//     var amount = a - 200;
//     console.log(amount);
// }
// abc(300);
// abc(900);
// abc(200);
// abc(400);

// function abc(a,b) {
//     var amount = a - b;
//     console.log(amount);
// }
// abc(300,100);
// abc(900,900);
// abc(200,200);
// abc(400,400);


var a = 10;

function abc () {
    a = 20 ;
}

function xyz () {
    console.log("function xyz =",a)
}

xyz();
abc();
console.log(a);

















