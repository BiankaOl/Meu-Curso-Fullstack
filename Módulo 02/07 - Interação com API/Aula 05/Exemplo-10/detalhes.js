async function buscar(){
    let buscarParametro = new URLSearchParams(window.location.search)
    let parametroId = buscarParametro.get("id")
    //alert(parametroId)
    
    let procura = await fetch("lista_produtosjson")
    let produtos = await procura.json()

    let indice = null
    for(let x in produtos){
        if(produtos[x].id == parametroId){
            indice = x
        }
    }

    alert(indice)
}

buscar()