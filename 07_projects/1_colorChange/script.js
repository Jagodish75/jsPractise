const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        // console.log(event);
        // console.log(event.target);
        // if (event.target.id === "grey") {
        //     body.style.backgroundColor = "grey";
        // }
        // if (event.target.id === "pink") {
        //     body.style.backgroundColor = event.target.id;
        // }
        // if (event.target.id === "green") {
        //     body.style.backgroundColor = event.target.id;
        // }
        // if (event.target.id === "yellow") {
        //     body.style.backgroundColor = event.target.id;
        // }
        body.style.backgroundColor = event.target.id;
    });
    // console.log(button);
});
