// Minha solução
function solution(inputArray) {
    let newArray = []
    let maiorStr = ''
    for(let i = 0; i < inputArray.length; i++){
       if(inputArray[i].length > maiorStr.length ){
        maiorStr = inputArray[i]
        newArray = []
        newArray.push(maiorStr)
       } else if(inputArray[i].length === maiorStr.length){
        maiorStr = inputArray[i]
        newArray.push(maiorStr)
       }
    }
    return newArray
}
console.log(solution(["aba", "aa", "ad", "vcd", "aba"]))


// Melhor solução
const solution2 = inputArray => inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)))
console.log(solution2(["aba", "aa", "ad", "vcd", "aba"]))