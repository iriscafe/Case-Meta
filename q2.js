const v = ['{', '{', '[', '[', '(', '(', ')', ')', ']', ']', '}', '}'];

let resposta = '';
let j = v.length - 1;

for (let i = 0; i < v.length / 2; i++) {
    if (v[i] == '{') {
        corresp = '}';
        if (v[j] == corresp) {
            resposta = 'SIM';
            j--;
        }
    } if (v[i] == '[') {
        corresp = ']';
        if (v[j] == corresp) {
            resposta = 'SIM';
            j--;
        }
    }
    if (v[i] == '(') {
        corresp = ')';
        if (v[j] == corresp) {
            resposta = 'SIM';
            j--;
        }
    } else {
        resposta = 'NÃO';
    }
} console.log(resposta);