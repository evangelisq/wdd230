


const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
  const cardsContainer = document.getElementById('cards');

  prophets.forEach((prophet) =>{

    const card = document.createElement('section');
    card.classList.add('card');

    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    const birthDate = document.createElement('p');
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;

    const birthPlace = document.createElement('p');
    birthPlace.textContent = `Birth place: ${prophet.birthplace}`;

    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);

    cardsContainer.appendChild(card);
  });
};

fetch(url)
   .then((response) => response.json())
   .then((data) => {
       displayProphets(data.prophets);
   })
   .catch((error) => console.error('Error fetching data:', error));
//const cards = document.querySelector('#cards');

//async function getProphetData() {
  //  const response = await fetch(url);
  //  const data = await response.json();
   // console.table(data.prophets); // temporary testing of data retreival
 // }
  
  //getProphetData();

  //const displayProphets = (prophets) => {
  //  prophets.forEach((prophet) => {
      //--- Create elements to add to the div.cards element
    //  let card = document.createElement('section');
      //let fullName = document.createElement('__'); // fill in the blank
      //let portrait = document.createElement('img');
  
      //-- Build the h2 content out to show the prophet's full name
     // fullName.textContent = `${prophet.firstname} ${prophet.lastName}`; // fill in the blank
      //-- Build the image portrait by setting all the relevant attributes
    //  portrait.setAttribute('src', prophet.imageurl);
    //  portrait.setAttribute('alt', `Portrait of ${prophet.firstName} ${prophet.lastName}`); // fill in the blank
     // portrait.setAttribute('loading', 'lazy');
     // portrait.setAttribute('width', '340');
     // portrait.setAttribute('height', '440');
  
      //-- Append the section(card) with the created elements
      //card.appendChild(fullName); //fill in the blank
      //card.appendChild(portrait);
  
      //cards.appendChild(card);
    //}); // end of arrow function and forEach loop
 // } 
  document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;