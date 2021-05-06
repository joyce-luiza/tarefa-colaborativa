let btnCircumference = document.querySelector(".btn-circumference");
let btnRectangle = document.querySelector(".btn-rectangle");
let submitButton = document.getElementById("submit");
let message = document.querySelector(".message");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const materials = {
  basalto: {
    price: 85.0,
  },
  pedraMineira: {
    price: 20.0,
  },
  pedraPortuguesa: {
    price: 40.0,
  },
  miracema: {
    price: 20.0,
  },
  concreto: {
    price: 30.0,
  },
};

const calculateCircumferencePerimeter = (numPosts, ray) => {
  let totalPerimeter = numPosts * (2 * ray * Math.PI);
  return totalPerimeter;
};

const calculateCircumferenceArea = (numPosts, ray) => {
  let totalArea = numPosts * (Math.PI * ray ** 2);
  return totalArea;
};

const calculateRectangleArea = (height, base) => {
  return base * height;
};

const calculateRectanglePerimeter = (height, base) => {
  return 2 * (+base + +height);
};

const openModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

submitButton.addEventListener("click", () => {
  event.preventDefault();
  let numPosts = document.getElementById("num-posts").value;
  let ray = document.getElementById("ray").value;
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;
  let material = document.getElementById("material").value;

  let circumferenceArea = calculateCircumferenceArea(numPosts, ray).toFixed(2);
  let circumferencePerimeter = calculateCircumferencePerimeter(
    numPosts,
    ray
  ).toFixed(2);
  let rectangleArea = calculateRectangleArea(height, base).toFixed(2);
  let rectanglePerimeter = calculateRectanglePerimeter(height, base).toFixed(2);
  let orcamento = materials[material].price * rectangleArea;

  message.textContent = `A área total dos postes é: ${circumferenceArea} e o perímetro total é: ${circumferencePerimeter}.
  A área total da calçada é de: ${rectangleArea} e o perímetro total é de: ${rectanglePerimeter}. O orçamento
  total é de: R$${orcamento}.`;
  openModal();
});

btnCloseModal.addEventListener("click", closeModal);
