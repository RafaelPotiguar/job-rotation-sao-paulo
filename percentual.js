const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

var estados = [sp, rj, mg, es, outros]

const valorTotal = estados.reduce((total, valor) => total + valor)

const percSp = (sp / valorTotal) * 100
const percRj = (rj / valorTotal) * 100
const percMg = (mg / valorTotal) * 100
const percEs = (es / valorTotal) * 100
const percOutros = (outros / valorTotal) * 100

console.log("Percentual de representação de SP: ",percSp)
console.log("Percentual de representação de RJ: ",percRj)
console.log("Percentual de representação de MG: ",percMg)
console.log("Percentual de representação de ES: ",percEs)
console.log("Percentual de representação dos outros estados: ",percOutros)