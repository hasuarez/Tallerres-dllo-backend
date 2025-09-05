

function desglosarString(str, Letra) {
    str = str.toLowerCase()
    str = str.trim()
    str = str.replace(" ","")
    const array = str.split("");
  if (Letra === "vocales") {
    function find(acum, actual) {
      if (actual === "a" || actual === "e" || actual === "i" || actual === "o" || actual === "u") {
        acum = acum + 1
      }else{
        acum = acum + 0
      }
      return acum
    }
    return array.reduce(find, 0)

  }

  if (Letra === "consonantes") {
    function find2(acum, actual) {
      if (actual != "a" && actual != "e" && actual != "i" && actual != "o" && actual != "u") {
        acum = acum + 1;
      }else {
        acum = 0 + acum
      }
      return acum
    }
    return array.reduce(find2, 0)
  }
}

console.log(desglosarString("hola mundo", "vocales"))

function twoSum(arr, num){
    resultado = []
    function find(item,indice,arr){
        if (arr[indice] + arr[indice+1] ===num){
            return true
        }
    }


    otro_indice= arr.findIndex(find)
    resultado.push(otro_indice)
    resultado.push(otro_indice+1)
    return resultado
}

console.log(twoSum([2,7,11,15], 9))


  function conversionRomana(str) {
    str = str.toUpperCase();
    str = str.replace(/CM/g, "DCCCC");
    str = str.replace(/CD/g, "CCCC");
    str = str.replace(/XC/g, "LXXXX");
    str = str.replace(/XL/g, "XXXX");
    str = str.replace(/IX/g, "VIIII");
    str = str.replace(/IV/g, "IIII");
    const arr = str.split("");
    function find(acum, actual) {
      if (actual === "I") {
        acum = acum + 1;
      } else if (actual === "V") {
        acum = acum + 5;
      } else if (actual === "X") {
        acum = acum + 10;
      } else if (actual === "L") {
        acum = acum + 50;
      } else if (actual === "C") {
        acum = acum + 100;
      } else if (actual === "D") {
        acum = acum + 500;
      } else if (actual === "M") {
        acum = acum + 1000;
      } return acum;
  }   
  return arr.reduce(find, 0);

}  
console.log(conversionRomana("mmxxiv"))

function descomposicion(str) {
  const [target, ...dic] = str.split(",").map(s => s.trim())

  const freq = dic.reduce((m, w) => (m[w] = (m[w] || 0) + 1, m), {})

  
  const w = dic.find(word => {
    if (!target.startsWith(word)) return false      
    const rest = target.slice(word.length)          
    if (!rest) return false                         
    if (word === rest) return (freq[word] || 0) >= 2 
    return dic.includes(rest)                       
  })

  if (!w) return []

  const rest = target.slice(w.length)
  return [w, rest]
}


console.log(descomposicion("malhumor,mala,hum,humor,mala,mal,malhu,umor")) 











