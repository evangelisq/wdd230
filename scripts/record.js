const params = new URLSearchParams(window.Location.search);
const username = oarams.get('username');
const email = params.get(email);
const rating - params.get('rating');

const valuesElement = document.getElementById('Submitted vatues')
valuesElement.innerHTML = `<strong>Submitted Details: </strong>br
Username: ${username}br
Email: ${email}br
Rating: ${rating}`;
`