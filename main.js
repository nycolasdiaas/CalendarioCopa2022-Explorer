function createdGame(player1,hour,player2){
  return`
  <li>
    <img src="./Bandeiras dos países/icon=${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./Bandeiras dos países/icon=${player2}.svg" alt="Bandeira da ${player2}">
  </li>`
}

delay = -0.4;
function createdCard(date, day, games){
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `  
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="./🟠 NLW Copa/icon-logo.svg" alt="Logo do NWL">
</header>
<main id="cards">
    ${createdCard("24/11","quinta",createdGame("brazil","16:00","serbia"))}
    ${createdCard("28/11","segunda", createdGame("brazil", "13:00","switzerland"))}
    ${createdCard("02/12", "sexta", createdGame("cameroon", "16:00", "brazil"))}
</main>
`