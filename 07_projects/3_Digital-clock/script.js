// const btn = document.getElementById("btn");
document.getElementById("btn").addEventListener("click", () => {
    const clock = document.querySelector("#clock");

    setInterval(() => {
        const date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
        // console.log(date.toLocaleDateString());
    }, 1000);
});
