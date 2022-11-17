// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// 3. Iterate 0 to n using for loop

let i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)

// 4. Write a loop that makes the following pattern using console.log()

let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

// 5. Use loop to print the following pattern

for ( i=0; i <=10; i++){
    console.log(`${i} * ${i} = {i*i}`)
}

// 6. Using loop print the following pattern

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i= 0; i<100; i++){
    if(i % 2 == 0){console.log(i)}
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i= 0; i<100; i++){
    if(i % 2 == 0){console.log(i+1)}
}