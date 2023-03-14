console.log("Uh-oh spaghettios!!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log(i)
        }
    }
    for (let i = 0; i > count; i--){
        if (i % 2 != 0)
        console.log(i)
    }
        
}
printOdds(-100)
printOdds(100)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `"Congrats ${userName} you can drive!"`;
    let belowSixteen = `"Sorry ${userName} but you need to wait ${16-age} more years"`;
   
    if (age >= 16){
        console.log(aboveSixteen)
    }
    else {
        console.log(belowSixteen)
    }
}
checkAge("Jared", 17)
checkAge("Stacy", 15)
checkAge("Brandon", 13)
checkAge("Mallory", 21)
checkAge("Emmit", -15)

// Exercise 3
console.log("EXERCISE 3:\n==========\n")

function caretsianPlane(x, y){
    if (x > 0 && y >0){
        console.log(`Quadrant 1`)
    }
    else if (x < 0 && y >0){
        console.log(`Quadrant 2`)
    }
    else if (x < 0 && y < 0){
        console.log(`Quadrant 3`)
    }
    else if (x > 0 && y < 0){
        console.log(`Quadrant 4`)
    }
    else if (x == 0 && y != 0){
        console.log(`x axis`)
    }
    else if (x != 0 && y == 0){
        console.log(`y axis`)
    }
    else if (x == 0 && y == 0){
        console.log(`center`)
    }
}
caretsianPlane(1, 5)
caretsianPlane(-5, 10)
caretsianPlane(-3, -5)
caretsianPlane(4, -8)
caretsianPlane(0, 7)
caretsianPlane(6, 0)
caretsianPlane(0, 0)

// Exercise 4
console.log("EXERCISE 4:\n==========\n")

function triangle(side1, side2, side3){
    if (side1 + side2 < side3){
        console.log(`Invalid Triangle`)
    }
    else if (side1 == side2 && side1 == side3){
        console.log(`Equilateral Triangle`)
    }
    else if (side1 == side2 && side1 > side3){
        console.log(`Isosceles Triangle`)
    }
    else if (side1 > side2 && side2 > side3){
        console.log(`Scalene Triangle`)
    }

}
triangle(7, 7, 7)
triangle(9, 9, 5)
triangle(8, 7, 6)
triangle(1, 1, 10)

// // Exercise 6
// console.log("EXERCISE 5:\n==========\n")
// /*
// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.
// */
// function dataPlanStatus(planLimit, day, usage){
//     let periodLength = 31
//     let currentAverage = usage / day
//     let projectedAverage = planLimit / periodLength
//     let remainingData = planLimit - usage
//     let remainingDays = periodLength - day
//     let projectedUsage = remainingDays * currentAverage
//     let statusMessage;

//     console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`)
//     console.log(`Average projected use: ${projectedAverage} GB/day`)
    
//     if (currentAverage > projectedAverage){
//         statusMessage = "EXCEEDING"
//     } else if (currentAverage < projectedAverage){
//         statusMessage = "UNDER"
//     } else {
//         statusMessage = "AT"
//     }
    
//     console.log(`You are ${statusMessage} your average daily use by (${currentAverage} GB/day),
//     continuing this usage, you will use ${planLimit - (remainingDays * currentAverage)}your data plan by
//     11.9 GB.`)
// }
// dataPlanStatus(50, 15, 25)