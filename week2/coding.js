//1. Print numbers from 1 to 10
console.log("Print numbers from 1 to 10")
for(let i =1;i<=10;i++)
    {
        console.log(i)
    }
//2. Print the odd numbers less than 100
console.log("Print the odd numbers less than 100")
for(let i = 1; i <= 100; i += 2)
    {
        console.log(i)
    }
//3. Print the multiplication table with 7
console.log("Print the multiplication table with 7")
for(let i = 1; i <= 10; i++)
    {
        let row = "7 * " + i + " = " + 7 * i;
        console.log(row);
    }
//4. Print all the multiplication tables with numbers from 1 to 10
console.log("Print all the multiplication tables with numbers from 1 to 10")
for(let i = 1; i <= 10; i++)
    {
        table(i)
        console.log("")
    }
    
    function table(n)
    {
        for(let i = 1; i <= 10; i++)
        {
            let row = n + " * " + i + " = " + n * i;
            console.log(row)
        }
    }
//5. Calculate the sum of numbers from 1 to 10
console.log("Calculate the sum of numbers from 1 to 10")
let sum = 0;

for(let i = 1; i <= 10; i++)
{
    sum += i;
}

console.log(sum)
//6. Calculate 10!
console.log(" Calculate 10!")
let rs=1;
for(let i=1;i<=10;i++){
    rs*=i;
}
console.log(rs)
//7. Calculate the sum of even numbers greater than 10 and less than 30
console.log("Calculate the sum of even numbers greater than 10 and less than 30")
let sum7 = 0;

for(let i = 11; i <= 30; i += 2)
{
    sum7 += i;
}

console.log(sum7);
//8. Create a function that will convert from Celsius to Fahrenheit
console.log(" Create a function that will convert from Celsius to Fahrenheit")
function celsiusToFahrenheit(n)
{
    return n * 1.8 + 32;
}

let rs8 = celsiusToFahrenheit(20);
console.log(rs8);
//9. Create a function that will convert from Fahrenheit to Celsius
console.log(" Create a function that will convert from Fahrenheit to Celsius")

function fahrenheitToCelsius(n)
{
    return (n - 32) / 1.8;
}

let rs9 = fahrenheitToCelsius(68);
console.log(rs9);
//10. Calculate the sum of numbers in an array of numbers
console.log("Calculate the sum of numbers in an array of numbers")
function sumArray(ar10)
{
    let sum = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

let ar10 = [8, 2, 11, 56, -17, 59, 32, -19, 35];
let sum10 = sumArray(ar10);
console.log(sum10);
//11. Calculate the average of the numbers in an array of numbers
function averageArray(ar)
{
    let n = ar.length;
    let sum = 0;
    
    for(let i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

let ar11 = [1, 6, 2, 52, 90];
let avg11 = averageArray(ar);

println("Average: ", avg);
//12. Create a function that receives an array of numbers as argument and returns an array
//containing only the positive numbers
function getPositives(ar)
{
    let arrayPositives = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        let el = ar[i];
        
        if (el >= 0)
        {
            ar.push(el);
        }
    }
    
    return arrayPositives;
}

let ar12 = [5, -52, -31, 2, -9, 12, 30, -44, 21];
let arrayPositives = getPositives(ar12);

println(ar12);
//13. Find the maximum number in an array of numbers
function findMax(ar)
{
    let max13 = ar[0];
    
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max13;
}

let ar13 = [32,-11,3,22,-55,11,100];
let max13 = findMax(ar13);
println("Max: ", max);
//14. Print the first 10 Fibonacci numbers without recursion
let f0 = 0;
println(f0);

let f1 = 1;
println(f1);

for(let i = 2; i < 10; i++)
{
    let fi = f1 + f0;
    println(fi);
    
    f0 = f1;
    f1 = fi;
}
//15. Create a function that will find the nth Fibonacci number using recursion
function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n15 = findFibonacci(10);
println(n15);
//16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

println(2, " is prime? ", isPrime(2));
println(3, " is prime? ", isPrime(3));
println(4, " is prime? ", isPrime(4));
println(5, " is prime? ", isPrime(5));
println(9, " is prime? ", isPrime(9));
//17. Calculate the sum of digits of a positive integer number
function sumDigits(n)
{
    let s = n.toString();
    let sum17 = 0;
    
    for(let char of s)
    {
        let digit = parseInt(char);
        sum += digit;
    }
    
    return sum17;
}

let sum17 = sumDigits(1235231);
println("Sum: ", sum17);
//18. Print the first 100 prime numbers
//19. Create a function that will return in an array the first “p” prime numbers greater than “n”
//20. Rotate an array to the left 1 position
//21. Rotate an array to the right 1 position
//22. Reverse an array
//23. Reverse a string
//24. Create a function that will merge two arrays and return the result as a new array
//25. Create a function that will receive two arrays of numbers as arguments and return an
//array composed of all the numbers that are either in the first array or second array but not in
//both
//26. Create a function that will receive two arrays and will return an array with elements that
//are in the first array but not in the second
