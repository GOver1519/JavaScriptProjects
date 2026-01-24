//left and right slider
const minRange = document.querySelector(".min-range");
const maxRange = document.querySelector(".max-range");
//input box's
const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
//green slider
const priceSlider = document.querySelector(".price-slider");
//max value
const maxValue = 10000;
//slider
function updateSlider() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    let left = (minVal / maxValue) * 100;
    let right = 100 - (maxVal / maxValue) * 100;

    priceSlider.style.left = left + "%";
    priceSlider.style.right = right + "%";
}
//minimum sliding
minRange.addEventListener("input", () => {
    minInput.value = minRange.value;
    updateSlider();
});
//maximum sliding
maxRange.addEventListener("input", () => {
    maxInput.value = maxRange.value;
    updateSlider();
});
//minimum input
minInput.addEventListener("input", () => {
    minRange.value = minInput.value;
    updateSlider();
});
//maximum input
maxInput.addEventListener("input", () => {
    maxRange.value = maxInput.value;
    updateSlider();
});

updateSlider();

