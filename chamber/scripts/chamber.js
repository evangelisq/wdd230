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
document.addEventListener("DOMContentLoaded", function () {
    fetch("members.json") // Replace with the correct path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch members.json");
            }
            return response.json();
        })
        .then(data => {
            const spotlightAds = document.getElementById("spotlight-ads");

            // Filter members with "Silver" or "Gold" membership levels
            const qualifiedMembers = data.filter(member =>
                member.membership_level === "Silver" || member.membership_level === "Gold"
            );

            // Randomly select 2–3 members from the qualified list
            const randomMembers = qualifiedMembers
                .sort(() => 0.5 - Math.random()) // Shuffle the array
                .slice(0, 3); // Select up to 3 members

            // Create and display advertisement cards for each selected member
            randomMembers.forEach(member => {
                const card = document.createElement("div");
                card.className = "spotlight-card";

                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.additional_info}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightAds.appendChild(card);
            });
        })
        .catch(error => console.error("Error Loading Data:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const banner = document.getElementById("banner");

    // Display the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    }

    // Allow users to close the banner
    document.getElementById("close-banner").addEventListener("click", function () {
        banner.style.display = "none";
    });
});
console.log("Fetching spotlight ads...");
fetch("members.json")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data:", data); // Check if data is fetched
        console.log("Filtered members:", qualifiedMembers); // Check filtered data
        console.log("Random spotlight members:", randomMembers); // Check random selection
    });


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;

document.getElementById('spotlight-ads').innerHTML = 'Updatedad content';