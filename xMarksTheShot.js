
let x = 0;
let y = 0;
let pos = [x, y];

function finalPosition(moves) {
  
  if (moves === 'north') {
    pos[1]++;
  }
  else if (moves === 'west') {
    pos[0]--;
  }
  else if (moves === 'east') {
    pos[0]++;
  }
  else if (moves === 'south') {
    pos[1]--;
  }
  return pos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

for (var i = 0; i < moves.length; i++){
  finalPosition(moves[i]);
}

console.log(finalPosition(moves[moves.length]));