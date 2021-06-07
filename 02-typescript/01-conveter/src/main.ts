const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
if (!(inputA instanceof HTMLInputElement)) {
  throw new Error("Can't find input with id a");
}
if (!(inputB instanceof HTMLInputElement)) {
  throw new Error("Can't find input with id b");
}

const convertC = () => {
  let val_a = Number(inputA.value);
  //   let val_b = Number(inputB.value);
  inputB.value = ((val_a - 32) / 1.8).toFixed(2);
};
const convertF = () => {
  //   let val_a = Number(inputA.value);
  let val_b = Number(inputB.value);
  inputA.value = (val_b * 1.8 + 32).toFixed(2);
};
inputA.addEventListener("input", convertC);
inputB.addEventListener("input", convertF);
