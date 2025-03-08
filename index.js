// Code your solutions in this file

for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
}

wrapGifts(gifts);

function writeCards(names, event) {
    let thankYouMessages = [];  // Create an empty array to hold the messages
    
    // Iterate through the names array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message and add it to the array
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return thankYouMessages;  // Return the array of thank you messages
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  console.log(writeCards(names, event));

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;  // Increment the counter
  }

  function countDown(number) {
    let i = number;  // Start from the given number
    while (i >= 0) {
      console.log(i);  // Log the current value of i
      i--;  // Decrease i by 1 after each iteration
    }
  }
  
  countDown(10);
  
