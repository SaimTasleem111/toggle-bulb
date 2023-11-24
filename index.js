let turnOnButton = document.getElementById('turnOnButton');
let lightBulb = document.getElementById('lightBulb');

// Adding a descriptive event listener
turnOnButton.addEventListener('click', toggleBulb);

// Function for toggling the bulb state
function toggleBulb() {
    if (turnOnButton.textContent.includes('Turn On')) {
        // Updating the source and alt attribute of the bulb image
        lightBulb.src = "bulb-on.png";
        turnOnButton.textContent = "Turn Off";
    } else {
        lightBulb.src = "bulb-off.png";
        turnOnButton.textContent = "Turn On";
    }
}
