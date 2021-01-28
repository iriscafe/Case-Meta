const v = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

var j = 1;
var sum = 0;

for (i = 0; i < v.length; i++) {
    if (v[i] > v[j]) {
        const result = v[i] - v[j]
        sum = sum + result;
    } j++;

}
console.log(sum);