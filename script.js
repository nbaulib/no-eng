// // Get references to the button and the collapsible content
// const toggleButton = document.getElementById("toggleButton");
// const collapsibleContent = document.getElementById("content");

// // Add a click event listener to the button
// toggleButton.addEventListener("click", function() {
//     // Check the current display property of the content
//     if (collapsibleContent.style.display === "none") {
//         // If it's hidden, show it
//         collapsibleContent.style.display = "block";
//     } else {
//         // If it's visible, hide it
//         collapsibleContent.style.display = "none";
//     }
// });


// Get references to all buttons and content sections
const toggleButtons = document.querySelectorAll(".toggleButton");
const contents = document.querySelectorAll(".content");

// Add click event listeners to each button
toggleButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        // Toggle the content visibility with each click
        if (contents[index].style.display === "block" || contents[index].style.display === "") {
            // If it's visible, hide it
            contents[index].style.display = "none";
        } else {
            // If it's hidden or not set, show it
            contents[index].style.display = "block";
        }
    });
});
