let temps = [-10, 0, 10, 16];
const temperature = temps[Math.floor(Math.random() * 4)];


if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

console.log(temperature + " was selected");