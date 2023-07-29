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
function solution2(inputArray) {
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}
console.log(solution2(["aba", "aa", "ad", "vcd", "aba"]))