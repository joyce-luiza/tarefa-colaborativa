let btnCircumference = document.querySelector(".btn-circumference");
let btnRectangle = document.querySelector(".btn-rectangle");
let circumferenceMessage = document.querySelector(".circumference-message");
let rectangleMessage = document.querySelector(".rectangle-message");

const calculateCircumferencePerimeter = (ray) => {
  return 2 * ray * Math.PI;
};

const calculateCircumferenceArea = (ray) => {
  return Math.PI * ray ** 2;
};

const calculateRectangleArea = (height, base) => {
  return base * height;
};

const calculateRectanglePerimeter = (height, base) => {
  return 2 * (base + height);
};

btnCircumference.addEventListener("click", function () {
  let ray = document.getElementById("ray").value;
  if (ray) {
    let area = calculateCircumferenceArea(ray).toFixed(2);
    let perimeter = calculateCircumferencePerimeter(ray).toFixed(2);

    circumferenceMessage.textContent = `A área da circunferência é de: ${area} O perímetro da circunferência é de: ${perimeter}`;
  } else {
    circunferenceMessage.textContent = `Digite o valor do raio da circunferência.`;
  }
});

btnRectangle.addEventListener("click", function () {
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;
  if (base && height) {
    let area = calculateCircumferenceArea(base, height).toFixed(2);
    let perimeter = calculateCircumferencePerimeter(base, height).toFixed(2);
    rectangleMessage.textContent = `A área da circunferência é de: ${area} O perímetro do retângulo é de: ${perimeter}`;
  } else {
    rectangleMessage.textContent = `Insira os valores da base e altura.`;
  }
});
