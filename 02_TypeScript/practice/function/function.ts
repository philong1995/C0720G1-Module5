function square(num: number): number {
    return num * num;
}

console.log(square(5));

const squareFE = function (num: number): number {
    return num * num;
}
console.log(squareFE(9));

function add(a: number): Function {
    return function(b: number): number {
        return a + b;
    }
}

const addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(15));