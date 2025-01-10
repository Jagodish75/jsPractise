const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Your input height is : ${height}. Please give a valid height`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Your weight is : ${weight}. Please give a valid `;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

    /************Another Method to for Dont show NaN for invalid input**************/
    // const height = document.querySelector("#height").value;
    // const heightIntiger = parseInt(height);
    // const weight = document.querySelector("#weight").value;
    // const weightIntiger = parseInt(weight);
    // const result = document.querySelector(".result");

    // if (heightIntiger === "" || heightIntiger < 0 || isNaN(heightIntiger)) {
    //     result.innerHTML = `Your input height is : ${height}. Please give a valid height`;
    // } else if (
    //     weightIntiger === "" ||
    //     weightIntiger < 0 ||
    //     isNaN(weightIntiger)
    // ) {
    //     result.innerHTML = `Your weight is : ${weight}. Please give a valid `;
    // } else {
    //     const bmi = (
    //         weightIntiger /
    //         ((heightIntiger * heightIntiger) / 10000)
    //     ).toFixed(2);
    //     result.innerHTML = `Your BMI result is : <span>${bmi}</span>`;
    // }

    /*********** Check the result is normail or not ***********/
    if(result<){}
});
