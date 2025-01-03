// for (let i = 0; i < 5; i++) {
//     const element = i;
//     if (element == 3) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`Inner value: ${j}`);
//     }
// }

// let myAray = ["flash", "batman", "superman"];
// for (let index = 0; index < myAray.length; index++) {
//     const element = myAray[index];
//     console.log(element);
// }

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of index ${index}`);
// }

for (let index = 1; index <= 10; index++) {
    const element = index;
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of index ${index}`);
}
