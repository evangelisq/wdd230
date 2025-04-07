fetch('data/members.json')
.then(response => response.json()) 
.then(data => {
    const container = document.getElementById('members-container');
     data.forEach(member => {
        const memberCard = `<div class = "member-card">
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a heref="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
        </div>`;
        container.innerHTML += memberCard;
     });
})
.catch(error => console.error('Error loading data:', error));

function toogleView(viewType) {
    const contaier = document.getElementById('members-container');
    if (viewType  == 'grid'){
        container.classList.remove('list-view');
        contaier.classList.add('grid-view');
    } else {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
    }
}


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;