async function buscar(){
    let buscaParametro = new URLSearchParams(window.location.search)
    let parametroId = buscaParametro.get("id")

    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.json()

    let indice = null
    for(let x in produtos){
        if(produtos[x].id == parametroId){
            indice = x
        }
    }
}

document.body.innerHTML = `
    <h1>${produtos[indice].nome}</h1>
`

buacar()