
function findMax(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
}
 return max
}
console.log(findMax([3, 17, -1, 4, -19]))

function includes(arr, num){
    let esta = false
    for(let i = 0; i < arr.length; i++){
        if (num === arr[i]){
            esta = true
        }
    }
    return esta
}

console.log(includes([3, 17, -1, 4, -19], 4))

function sum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(sum([3, 17, -1, 4, -19]))

function missingNumbers(arr){
let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
}
let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
}

for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                // Intercambiar elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

let falt = []
let indice = 0
    for(let i = min ; i < max; i++ ){
        if( i != arr[indice]){
            falt.push(i)
            i = i + 1
        }
        indice = indice + 1
    }
    return falt
}

console.log(missingNumbers([2,3,4,6,7,9]))

