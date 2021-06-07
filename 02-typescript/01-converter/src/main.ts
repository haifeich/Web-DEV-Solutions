const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const selectA = document.querySelector("#selectA");
const selectB = document.querySelector("#selectB");

if (!(inputA instanceof HTMLInputElement)) {
  throw new Error("Can't find input with id a");
}
if (!(inputB instanceof HTMLInputElement)) {
  throw new Error("Can't find input with id b");
}
if (!(selectA instanceof HTMLSelectElement)) {
  throw new Error("Can't find select with id selectA");
}
if (!(selectB instanceof HTMLSelectElement)) {
  throw new Error("Can't find select with id selectB");
}

const convertFtoC = (x: string) => ((Number(x) - 32) / 1.8).toFixed(2);

const convertCtoF = (x: string) => (Number(x) * 1.8 + 32).toFixed(2);

const convertCtoK = (x: string) => (Number(x) + 273.15).toFixed(2);

const convertKtoC = (x: string) => (Number(x) - 273.15).toFixed(2);

const convertFtoK = (x: string) => ((Number(x) - 32) / 1.8 + 273.15).toFixed(2);

const convertKtoF = (x: string) => ((Number(x) - 273.15) * 1.8 + 32).toFixed(2);

const changeA = () => {
  if (selectA.value === "fahrenheit") {
    switch (selectB.value) {
      case "fahrenheit":
        inputB.value = inputA.value;
        break;
      case "celsius":
        inputB.value = convertFtoC(inputA.value);
        break;
      case "kelvin":
        inputB.value = convertFtoK(inputA.value);
        break;
    }
  } else if (selectA.value === "celsius") {
    switch (selectB.value) {
      case "fahrenheit":
        inputB.value = convertCtoF(inputA.value);
        break;
      case "celsius":
        inputB.value = inputA.value;
        break;
      case "kelvin":
        inputB.value = convertCtoK(inputA.value);
        break;
    }
  } else {
    switch (selectB.value) {
      case "fahrenheit":
        inputB.value = convertKtoF(inputA.value);
        break;
      case "celsius":
        inputB.value = convertKtoC(inputA.value);
        break;
      case "kelvin":
        inputB.value = inputA.value;
        break;
    }
  }
};
const changeB = () => {
  if (selectB.value === "fahrenheit") {
    switch (selectA.value) {
      case "fahrenheit":
        inputA.value = inputB.value;
        break;
      case "celsius":
        inputA.value = convertFtoC(inputB.value);
        break;
      case "kelvin":
        inputA.value = convertFtoK(inputB.value);
        break;
    }
  } else if (selectB.value === "celsius") {
    switch (selectA.value) {
      case "fahrenheit":
        inputA.value = convertCtoF(inputB.value);
        break;
      case "celsius":
        inputA.value = inputB.value;
        break;
      case "kelvin":
        inputA.value = convertCtoK(inputB.value);
        break;
    }
  } else {
    switch (selectA.value) {
      case "fahrenheit":
        inputA.value = convertKtoF(inputB.value);
        break;
      case "celsius":
        inputA.value = convertKtoC(inputB.value);
        break;
      case "kelvin":
        inputA.value = inputB.value;
        break;
    }
  }
};
inputA.addEventListener("input", changeA);
inputB.addEventListener("input", changeB);
selectA.addEventListener("change", changeA);
selectB.addEventListener("change", changeB);
