const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
  menu.style.display = menu.style.display === 'flex'? 'none': 'flex'; 
}); 
   
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function(){
    //Banner Logic for Meet and Greet
    const dayOfWeek = new Date().getDay(); //0=Sunday 2= Monday 3 etc
    const banner = document.getElementById("banner");

    //Display the banner only Wednesday (dayOfWeek == 3)
    if (dayOfWeek == 3) {
        banner.style.display = "block";
    }
    document.getElementById("close-banner").addEventListener("click", function(){
        banner.style.display = "none";
    });
    // Spotlight ads logic
    fetch ("members.json") // Replace with the correct path to JSON file
    .then(response => response.json())
    .then(data => {
        const spotLightAds = document.getElementById("spotlight-ads");

        //Filter member with "Silver" or "Gold" membership levels
        const qualifiedMembers = data.filter(member =>
            member.membership_level == "Silver" || member.membership_level == "Gold"
        );
        // Random select 2-3 members from qualified list
        const randomMembers = qualifiedMembers
        .sort(() =>0.5 - Math.random()) //Shuffle the array 
        .slice(0, 3); // Select up to 3 members

        // Create and display advertisement cards foreach selected members
        randomMembers.forEach(member => {
            const card = document.createElement("div");
            card.className = "spotlight-card";

            card.innerHTML = `
            img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.additional_info}</p>
            <a heref="${member.website}" target="_blank">Visit Website</a>`;
            spotLightAds.appendChild(card);
        });
    })
    .catch(error => console.error("Error Loading Date: error"));
});
document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
