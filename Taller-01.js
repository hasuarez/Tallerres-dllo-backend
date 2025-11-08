

let con = Fah(-40)
function Fah(c){
     
    let result = c * 9/5 + 32

    return result
}

function cuadratica(a,b,c, h ){
    div = 2 * a
    positive = -b + Math.sqrt(b**2 - 4 * a * c)
    negative = -b - Math.sqrt(b**2 - 4 * a * c)


    if(h == true){
        return  resultP = positive / div
    } else{
        return resultN = negative / div 
    }
}




function Mparidad(Num){
    if(Num % 2 == 0){
        x ="Numero par"
    } else {
        x= "Numero impar"
    }
    return x
}




function Pparidad(num){
    if (num ==0){
        console.log("El numero es par")
    }else if(num === 1){
        console.log("El numero es impar ")
    }else if(num === 2){
        console.log("El numero es par")
    }else if(num === 3){
        console.log("El numero es impar")
    }else if(num === 4){
        console.log("El numero es par")
    }else if(num === 5){
        console.log("El nuemro es impar")
    }else if(num === 6){
        console.log("el numero es par")
    }else if(num === 7){
        console.log("El numero es impar")
    }else if(num === 8){
        console.log("El numero es par")
    }else if(num === 9){
        console.log("El numero es impar")
    }else if(num === 10){
        console.log("Numero es par")
    }
    return "Numero fuera de rango (0-10)"
}

// Exportamos las 4 funciones
module.exports = {
    Fah,
    cuadratica,
    Mparidad,
    Pparidad
};
