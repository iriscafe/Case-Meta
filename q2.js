const v = ['{', '{', '[', '[', '(', '(', ')', ')', ']', ']', '}', '}'];

var obj = ['{', '}', '[', ']', '(', ')'];


var resposta = '';
var corresp = '';
var j = v.length - 1;

for (i = 0; i < v.length / 2; i++) {
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
