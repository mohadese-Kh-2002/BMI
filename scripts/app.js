const $ = document;
const selectWeight = $.querySelector("#select-weight");
const selectHeight = $.querySelector("#select-height");
const weight = $.querySelector("#weight");
const height = $.querySelector("#height");
const BMI = $.querySelector("#BMI");
const statusRes = $.querySelector("#statusRes");

const calcBMI = (weight, height) => {
    let BMI = (weight / (height / 100) ** 2).toFixed(1);
    return BMI;
};
const showValue = (show, select) => {
    show.textContent = select.value;
    let resultBMI=calcBMI(weight.innerHTML,height.innerHTML)
    BMI.textContent = resultBMI;
    if (resultBMI < 18.5) {
        statusRes.textContent = "Severely underweight";
        statusRes.style.cssText = "color:#ff700a";
    } else if (resultBMI >= 18.5 && resultBMI < 24.9) {
        statusRes.textContent = "Normal weight";
        statusRes.style.cssText = "color:#37ec00";
    } else if (resultBMI >= 25 && resultBMI < 30) {
        statusRes.textContent = "Overweight";
        statusRes.style.cssText = "color:#bacb00";
    } else {
        statusRes.textContent = "Obesity Class || & |||";
        statusRes.style.cssText = "color:#e90000";
    }
};
selectHeight.addEventListener("input", () => {
    showValue(height, selectHeight);
});
selectWeight.addEventListener("input", () => {
    showValue(weight, selectWeight);
});


