document.getElementById('cipher').addEventListener('click', e => {
  let message = document.getElementById('message').value;
  let key = document.getElementById('key').value;
  let output = document.getElementById('output');

  validateInput(message, key, output, cipher(message, key, output));
  deleteKey();
});

document.getElementById('decipher').addEventListener('click', e => {
  let message = document.getElementById('message').value;
  let key = document.getElementById('key').value;
  let output = document.getElementById('output');

  validateInput(message, key, output, decipher(message, key, output));
  deleteKey();
});

const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

const cipher = (message, key, output) => {
  let newMessage = '';
  let newArr = message.split('');
  key = ((key % 27) + 27) % 27;

  newArr.forEach(letter => {
    let capitalize = capitalizationChecker(letter);
    letter = letter.toLowerCase();
    if (alphabet.includes(letter)) {
      let newLetter = alphabet[(alphabet.indexOf(letter) + key) % 27];
      newMessage += isCapitalized(capitalize, newLetter);
    } else {
      newMessage += letter;
    }
  });

  return (output.value = newMessage);
};

const decipher = (message, key, output) => {
  let newMessage = '';
  let newArr = message.split('');
  key = ((key % 27) - 27) % 27;

  newArr.forEach(letter => {
    let capitalize = capitalizationChecker(letter);
    letter = letter.toLowerCase();
    if (alphabet.includes(letter)) {
      let newLetter = alphabet[(alphabet.indexOf(letter) - key) % 27];
      newMessage += isCapitalized(capitalize, newLetter);
    } else {
      newMessage += letter;
    }
  });

  return (output.value = newMessage);
};

function capitalizationChecker(letter) {
  return letter === letter.toUpperCase() ? true : false;
}

function isCapitalized(capitalize, letter) {
  return capitalize ? letter.toUpperCase() : letter;
}

function validateInput(message, key, output, callback) {
  if (message && key) {
    output.classList.remove('alert-message');
    return callback;
  }
  output.classList.add('alert-message');
  return (output.value = '¡Ingresa el mensaje y elige una llave!');
}

function deleteKey() {
  document.getElementById('key').value = '';
}
