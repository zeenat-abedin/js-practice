console.log(window);

//1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

//2. In Q1 use confirm to ask the user if he wants to see the prompt again.

//3. In the previous question, use console.error to log the error if the age entered is negative.

let runAgain = true;
const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = prompt("Enter age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }
  if (canDrive(age)) {
    alert("Yes, you can drive. ");
  } else {
    alert("You are a minor. You cannot drive.");
  }
  runAgain = confirm("Do you want to play again?");
}

//4. Write a program to change the URL to google.com (redirection)

let number = prompt("Enter number");
number = Number.parseInt(number);

if (number > 4) {
  location.href = "https://www.google.com";
}

//5. Change the background to yellow, green or any other color

let color = prompt("Enter background color");

document.body.style.backgroundColor = color;
