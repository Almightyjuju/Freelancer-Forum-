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
