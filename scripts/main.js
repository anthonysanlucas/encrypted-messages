const abc = 'abcdefghijklmnñopqrstuvwxyz';

let textoPrueba = '¡ho_la!';
const encript = () => {
  const regex = /[a-zA-Z]/g;
  let key = 14;
  let newText = [];
  let newArr = textoPrueba.split('');
  let resultado = '';

  newArr.forEach(element => {
    if (regex.test(element)) {
      let posActual = abc.indexOf(textoPrueba[element]);
      let posDeseada = posActual + key;
      let posNueva =
        posDeseada < abc.length ? posDeseada : posDeseada % abc.length;

      let letraNueva = abc[posNueva];
      newText.push(letraNueva);
    } else {
      newText.push(element);
    }
  });
  return newText.join('');
};

console.log(encript());

textoPrueba = '¡vo_za!';
const desencriptar = () => {
  const regex = /[a-zA-Z]/g;
  let key = 14;
  let newText = [];
  let newArr = textoPrueba.split('');

  for (let i = 0; i < textoPrueba.length; i--) {
    if (regex.test(textoPrueba[i])) {
      let posActual = abc.indexOf(textoPrueba[textoPrueba[i]]);
      let posDeseada = posActual + key;
      let posNueva =
        posDeseada < abc.length ? posDeseada : posDeseada % abc.length;

      let letraNueva = abc[posNueva];
      newText.push(letraNueva);
    } else {
      newText.push(textoPrueba[i]);
    }
  }
  return newText.join('');
};

console.log(desencriptar(textoPrueba));
