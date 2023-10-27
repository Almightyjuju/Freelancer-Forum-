let freeLancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

function renderLancers() {
  let lancersInfo = document.getElementById("lancers-info");

  for (let i = 0; i < freeLancers.length; i++) {
    let currentLancer = freeLancers[i];
    let lancerDiv = document.createElement("div");
    lancerDiv.className = "info";
    lancerDiv.innerHTML = `<h2>${currentLancer.name}</h2>
                          <h3>Occupation:  ${currentLancer.occupation}</h3>
                          <h3>Starting Price $ ${currentLancer.price}</h3>`;
    lancersInfo.appendChild(lancerDiv);
  }
}

renderLancers();
// get h3 element by its class name
let averagePriceElement = document.querySelector(".average-price");
// set the initial starting price
let startingPrice = 30;

// function to update the averaging staring price
function updateAveragePrice() {
  averagePriceElement.textContent = `The average staring price is $ ${startingPrice}`;
  if (startingPrice >= 100) {
    startingPrice = 0; // restart the price to 0
  } else {
    startingPrice += 20; // increase the price by 20
  }
}

// call the update function
updateAveragePrice();
// call the update function every 4 seconds
setInterval(updateAveragePrice, 4000);

// editing header
let headerElement = document.querySelector("header");
//  function to change color between light blue and pink for text
function toggleColor() {
  if (headerElement.style.color === "lightblue") {
    headerElement.style.color === "pink";
  } else {
    headerElement.style.color = "lightblue";
  }
}

setInterval(toggleColor, 2000);
