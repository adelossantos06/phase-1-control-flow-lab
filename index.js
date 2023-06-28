function scuberGreetingForFeet(travelDistance) {
  if (travelDistance <= 400) {
    return 'This one is on me!';
  } else if (travelDistance > 400 && travelDistance < 2000) {
    return 'That will be twenty bucks.'
  } else if (travelDistance > 2000 && travelDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (travelDistance > 2500) {
    return 'No can do.';
  }
};
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city) {
  return ((city === 'NYC') ? 'Ok, sounds good.' : 'No go.')
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}

