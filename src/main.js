// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

// function displayDateTime() {
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   const now = new Date();

//   const day = days[now.getDay()];

//   let hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const amPm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12; 

//   const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
//   const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

//   console.log(`Today is : ${day}.`);
//   console.log(`Current time is : ${hours} ${amPm} : ${formattedMinutes} : ${formattedSeconds}`);
// }
// displayDateTime();


// 2. Write a JavaScript program to print the current window contents.