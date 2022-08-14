function scuberGreetingForFeet(distance){
  // Write your code here!
  if(Number(distance) <= 400){
    return 'This one is on me!'
  }else if(Number(distance) > 2500){
    return 'No can do.'
  }else if(Number(distance) > 2000){
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return String(city) === 'NYC'? 'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case 'generous':
      message = 'Thank you so much.';
      break;

    case 'not as generous':
      message = 'Thank you.';
      break;

    default:
      message = 'Bye.'
  }

  return message;
}