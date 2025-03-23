const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const visitMessage = document.getElementById('visit-message');

if (!lastVisit) {
    //First time visitor
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = now - lastVisit; // Calcu;ate time differences in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //Convert to days

    if (timeDifference < 24 * 60 * 60 * 1000) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitMessage.textContent = `You last visited ${daysDifference} day ago.`;
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago`;
    }
}

// Store the current visit time
localStorage.setItem('lastVisit', now);


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;