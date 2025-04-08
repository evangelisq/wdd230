fetch('data/members.json')
.then(response => response.json()) 
.then(data => {
    const container = document.getElementById('members-containers');
     data.forEach(member => {
        console.log(member.image);
        console.log('Toggle view to: ${viewType}');

        const memberCard = 
        `<div class = "member-card">
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
        </div>`;
        container.innerHTML += memberCard;
     });
})
.catch(error => console.error('Error loading data:', error));

function toggleView(viewType) {
    const container = document.getElementById('members-containers');
  
    if (viewType  == 'grid'){
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        console.log('Switched to Grid View');
    } else  if (viewType =='list'){
        container.classList.remove('grid-view');
        container.classList.add('list-view');
    }
}


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;