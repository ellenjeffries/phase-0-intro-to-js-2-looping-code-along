// Code your solutions in this file
function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return messages;
  }
  
  
  const names = ["Ellen", "Jack", "Bryce"];
  const eventName = "birthday";

  function countDown(startingNumber) {
    let count = startingNumber;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown(10);