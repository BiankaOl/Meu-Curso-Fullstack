async function buscar(){
    let procura = await fetch("lista_produtos.json")
    let produtos = await procura.json()
    
    let listDiv = document.getElementById("lista_card")
    for(let produto of produtos){
        listDiv.innerHTML+=`
            <div class = "card" data-id="${produto.id}">
                <div class= "grupo_img">
                    <img src="${produto.img}" width= "auto" heigth= "auto">
                </div>
                <div class= "textos">
                    <h3> ${produto.nome} </h3>
                    <p> ${produto.descricao} </p>
                <div>
                    <span class= "Com"> R$ ${(produto.valorComDesconto).toFixed(2).replace(".", ",")}</span>
                    <span class= "Sem"> R$ ${(produto.valorSemDesconto).toFixed(2).replace(".", ",")}</span>
                </div>
            </div>
        `
    }

    let elementosCard = document.querySelectorAll(".card")
    for(let card of elementosCard){
        card.addEventListener("click", cliquei)
    }
}

buscar()

function cliquei(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?id=" + elementoId
}
