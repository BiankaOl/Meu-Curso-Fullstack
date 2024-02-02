async function Qualquer(){
    let resposta = await fetch("pescaria.txt")
    let convert =  await resposta.text()
    console.log(convert)
}
Qualquer()