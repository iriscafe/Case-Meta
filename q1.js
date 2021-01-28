const nums = [4, 7, 8, 6, 1];
const sum = 9;
const indices = []

const k = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (nums[i] + nums[j] == sum) {
      if (indices.indexOf(i) == -1 || indices.indexOf(j) == -1) {
        indices.push(i, j);
      }
    }
  }
} console.log(indices);