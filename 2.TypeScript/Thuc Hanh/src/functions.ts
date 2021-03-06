// ============================================
// @ts-ignore
import {add} from "husky/lib";

function square(num: number): number {
    return num * num;
}

console.log(square(5));

// Expected:
//     25

    // ============================================
// Function expression
const squareFE = function (num: number): number {
    return num * num;
}
console.log(squareFE(9));

// Expected:
//     81
//     ============================================
//     // Higher-order function
//     function add(a: number): Function {
//         return function(b: number): number {
//             return a + b;
//         }
//     }

const addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(15));
// Expected:
//     8
// 20