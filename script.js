var time = new Date().getHours();

// Your conditional statements here
console.log(`The time is ${time}.`);

var greeting = "Greetings";
var name = "Janet";

//conditions of the greeting below
if (time <= 17) {
  greeting = "Good morning";
} else if (time >= 18) {
  greeting = "You are doing a great job with this lesson";
} else if (time >= 22) {
  greeting = "Good evening";
} else {
  greeting = "Why are you still up? Go to bed";
}

// alert()
alert(`${greeting}, ${name}!`);
