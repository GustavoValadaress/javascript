var num = [5,7,8,9,]

num.push(1)
num.sort()
console.log(num)
console.log (` o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor e ${num[0]}`)
var pos = num.indexOf(5)
if( pos == -1){
  console.log (`O valor nao foi encontrado!`)
}else {
  console.log (`Ò valor 8 esta na posiçao ${pos}`)
}
