// 1
// var today = new Date();
// document.write(today);

// 2
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }

// 3
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
//     if (c === "Sun"){
//         document.write(c)
//     }else if(c === "Mon"){
//         document.write(c)
//     }else if(c === "Tue"){
//         document.write(c)
//     }else if(c === "Wed"){
//         document.write(c)
//     }else if(c === "Thr"){
//         document.write(c)
//     }else if(c === "Fri"){
//         document.write(c)
//     }else if(c === "Sat"){
//         document.write(c)
//     }

// 4
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write(c)
// }else if(c === "Tue"){
//     document.write(c)
// }else if(c === "Wed"){
//     document.write(c)
// }else if(c === "Thr"){
//     document.write(c)
// }else if(c === "Fri"){
//     document.write(c)
// }

// 5
// var today = new Date();
// var date = today.getDate();
// if(date<=15){
//     alert("first fifteen days of month.");
// }
// else{
//     alert("last fifteen days of month.");
// }

// 6
// var tod = new Date();
// document.write(tod);
// var mid = new Date("January 01 1970");
// var today = tod.getTime();
// var midnight = mid.getTime();
// var Diff = today - midnight;
// document.write("Elapsed min since January 01 1970 : " + Math.floor(((Diff/1000)/60)/60));
// document.write(today);

// 7
// var today = new Date();
// var hour = today.getHours();
// if (hour >= 12){
//     document.write("Its pm.");
// }
// else{
//     document.write("Its am")
// }

// 8
// var date = new Date();
//  date.setFullYear(2020); date.setDate(31); date.setMonth(11);
// document.write(date);

// 9
// var tod = new Date();
// var y = new Date("June 18 2015");
// var today = tod.getTime();
// var year = y.getTime();
// var Diff = today - year;
// alert(Math.floor((((Diff/1000)/60)/60)/24)+" days have passed since 1st Ramadan.");

// 10
// var start = new Date();
// start.setFullYear(2015); start.setMonth(00); start.setDate(01); 
// var end = new Date();
// end.setFullYear(2015); end.setMonth(11); end.setDate(05); 
// var now = end - start;
// document.write("On reference date " + end + " " + (now/1000)/60 + 
// " seconds had passed since the beginning OF 2015");

// 11
// var to = new Date();
// var today = new Date("july 31 2021 06:23");
// document.write("Current Date: " + to + " it was " + today);

// 12
// var to = new Date();
// var tod = new Date("July 31 1921");
// document.write("Current date: " + to + " 100 years ago it was " +tod);

//13
// var date = +prompt("Enter your date of birth.");
// var month = prompt("Enter your month of birth in alphabets.");
// var year = +prompt("Enter your year of birth.");
// var DOB = new Date(date + " " + month + "," +year);
// var today = new Date();
// var Today = today.getTime();
// var DB = DOB.getTime();
// var totalYears = Today - DB;
// document.write("Your age is "+(Math.floor(((((totalYears/1000)/60)/60)/24)/365.25)));
// document.write("You born in "+year);

// 14
// var name = "Customer Name: M.Saad Khan";
// document.write(name);
// document.write("<br>");
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }
// var units = 410
// var charges = 16;
// var net = (units)*(charges);
// var late = 350;
// var gross = (net)+(late);
// document.write("<br>");
// document.write("Number of units: " + units);
// document.write("<br>");
// document.write("<br>");
// document.write("Charges per unit: " + charges)
// document.write("<br>");
// document.write("Net Amount Payable (Payable within due date): " + net);
// document.write("<br>");
// document.write("Late payment surcharge: " + late);
// document.write("<br>");
// document.write("Gross Amount Payable (After due date): " + gross);