courseDescriptions = document.getElementsByClassName("course-description");  //Course description divs
expandButtons = document.getElementsByClassName("expand-button");  //Course description expand arrow buttons

//Set the default visibility of course descriptions to none
for (let i = 0; i < courseDescriptions.length; i++) {
    courseDescriptions[i].style.display = "none";
}

const handleClick = (value) => {
    console.log("RAN");
}

//Set the click handler functions
for (let i = 0; i < expandButtons.length; i++) {
    expandButtons[i].onClick = handleClick;
}