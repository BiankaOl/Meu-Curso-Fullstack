/*async function Testar(){
    let resposta = await fetch("Lista.txt")
    let convert =  await resposta.text()
    let compr = await fetch("Carrinho.txt")
    let sin = await compr.text()
    console.log(convert)
    console.log(sin)
}

Testar()*/

async function buscar(arquivo, id){
    let buscado = await fetch(arquivo)
    let convert = await buscado.text()

    document.getElementById(id).textContent = convert
}

buscar("Lista.txt", "Chocolate")
buscar("Carrinho.txt", "Blusas")