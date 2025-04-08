fetch('data/members.json')
   .then(response => response.json()) 
   .then(data => {
     const container = document.getElementById('members-containers');
     let isOdd = true; // track for zebra striping
     data.forEach(member => {
        const stripeClass = isOdd? "odd-row" : "even-row";
        const memberCard = 
        `<div class = "member ${stripeClass}">
            <img src="${member.image}" alt="${member.name}">
            <div class="member-details">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            </div>
        </div>`;
        container.innerHTML += memberCard;
        isOdd = !isOdd;
     });
})
.catch(error => console.error('Error loading data:', error));

function toggleView(viewType) {
    const container = document.getElementById('members-containers');
    container.className = '';
    if (viewType  === 'grid'){
        container.classList.add('grid-view');
    } else  if (viewType ==='list'){
        container.classList.add('list-view');
    } else if (viewType === 'wide-grid-view') {
        container.classList.add('wide-grid-view');
    } else if (viewType === 'zebra-list') {
        container.classList.add('zebra-list-view');
    } else {
        console.error(`invalid viewType: ${viewType}`);
    }
}

const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
  menu.style.display = menu.style.display === 'flex'? 'none': 'flex'; 
}); 
   
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
    } else {
        cmenu.style.display = 'none';
    }
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;