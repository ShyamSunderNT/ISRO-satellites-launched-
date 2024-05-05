//! The div tag is slected by getElementsByClassName
const satelite = document.getElementsByClassName("satelite")[0];

function data() {
  const url = "https://isro.vercel.app/api/customer_satellites";

  //!Fetch and Promise
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

        //!forEach loop is used to display the contents
      data.customer_satellites.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 18rem;");
        card.innerHTML += `
                <div class="card-body">
                  <h5 class="card-title">${element.country}</h5>
                  <p class="card-text">ID : ${element.id}</p>
                  <p class="card-text">Mass : ${element.mass} Kilograms</p>
                  <p class="card-text">Launcher : ${element.launcher}</p>
                  <h6 class="card-subtitle mb-2 text-body-secondary" id="date"> Date :${element.launch_date}</h6>
                  </div>`;
        satelite.append(card);
      });
    }).catch((error)=>console.log(error))
}

//!Function call
data();