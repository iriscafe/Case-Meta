const v = [7, 1, 5, 3, 6, 4];

var menor = Math.min.apply(Math, v);
var maior = v[0];

//verif a partir do menor quem é o maior (data de venda)
for (j = v.indexOf(menor); j < 6; j++) {
    if (v[j] > maior) {
        maior = v[j];
    }
}
const lucro = maior - menor;
console.log(lucro);