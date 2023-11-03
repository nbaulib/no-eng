// Get references to all buttons and content sections
const toggleButtons = document.querySelectorAll(".toggleButton");
const contents = document.querySelectorAll(".content");

//Add click event listeners to each button
// toggleButtons.forEach((button, index) => {
//     button.addEventListener("click", function() {
//         // Toggle the content visibility with each click
//         if (contents[index].style.display === "block" || contents[index].style.display === "") {
//             // If it's visible, hide it
//             contents[index].style.display = "none";
//         } else {
//             // If it's hidden or not set, show it
//             contents[index].style.display = "block";
//         }
//     });
// });

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