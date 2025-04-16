fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
      const spotlightMembers = data.filter(member => 
          member.membership_level === "Silver" || member.membership_level === "Gold"
      );
      displaySpotlightAds(spotlightMembers);
  });

function getRandomMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Select `count` random members
}

function displaySpotlightAds(members) {
    const spotlightContainer = document.getElementById("spotlight-ads");
    spotlightContainer.innerHTML = ''; // Clear previous ads

    const selectedMembers = getRandomMembers(members, 3); // Pick 3 random members

    selectedMembers.forEach(member => {
        const ad = document.createElement("div");
        ad.className = "spotlight-ad";
        ad.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="100">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>${member.additional_info}</p>
        `;
        spotlightContainer.appendChild(ad);
    });
}