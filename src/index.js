// Your code here
// 
fetch('http://localhost:3000/films/1')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);

        function displayFilmOne(film) {
            const available_tickets = film.capacity - film.tickets_sold;

            document.getElementById("poster").src = film.poster;
            document.getElementById("title").textContent = film.title;
            document.getElementById("runtime").textContent = `${film.runtime} minutes`;
            document.getElementById("film-info").textContent = film.description;
            document.getElementById("showtime").textContent = film.showtime;
            document.getElementById("ticket-num").textContent = `${available_tickets} remaining tickets`;
        }

        displayFilmOne(data);
    })
    .catch((error) => {
        console.error('Error fetching film data:', error);
    });

fetch("http://localhost:3000/films")
.then ((res) => res.json())
.then ((data) => {
    console.log(data);
const filmList = document.getElementById("films")
for(film of data){
    const filmItem = document.createElement('li');
films.innerHTML +=`
<div id="list">
<p class="col">${film.title}<button  onclick="deleteTitle(${(film.id)})"class="btn btn-outline-primary">Delete</button></p> 
</div>
`
}

})
document.querySelector('#buy-ticket').addEventListener('click', () => {
    const ticketsAvailable = document.querySelector('#ticket-num');
    let currentTickets = parseInt(ticketsAvailable.textContent);
    
    if (currentTickets > 0) {
      currentTickets -= 1;
      ticketsAvailable.textContent = currentTickets;
  
      
      const filmId = 1;
      fetch(`http://localhost:3000/films/${filmId}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tickets_sold: parseInt(ticketsAvailable.textContent)
        })
      });
    } else {
      document.querySelector('#buy-ticket').textContent = 'Sold Out';
    }
  });
//   Function delete title
function deleteTitle(id) {
    fetch(`http://localhost:3000/films/${id}`, {
        method: "DELETE"
    })
.then ((res) => res.json())
.then ((data) => { 

})
}
