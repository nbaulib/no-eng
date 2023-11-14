// Get references to all buttons and content sections
const toggleButtons = document.querySelectorAll(".toggleButton");
const contents = document.querySelectorAll(".content");

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        // Toggle the content visibility with each click
        if (contents[index].style.display === "none" || contents[index].style.display === "") {
            // If it's visible, hide it
            contents[index].style.display = "block";
        } else {
            // If it's hidden or not set, show it
            contents[index].style.display = "none";
        }
    });
});


function countdownTimer() {
    const difference = +new Date("2023-11-21T10:00:00") - +new Date();
    let remaining = "AIRING NOW";

    if (difference > 0) {
        const parts = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        remaining = Object.keys(parts).map(part => {
            return `${parts[part]} ${part}`;
        }).join(" ");
    }

    document.getElementById("countdown").innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);