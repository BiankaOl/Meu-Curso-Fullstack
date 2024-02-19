async function buscar(){
    let procura = await fetch("lista_produtos.json")
    let produtos = await procura.json()
    
    let listDiv = document.getElementById("lista_card")
    for(let x in produtos){
        listDiv.innerHTML = `<h1> ${produtos[x].nome} </h1>`
    }
}

buscar()