let urlProdutos = "https://raw.githubusercontent.com/BiankaOl/Meu-Curso-Fullstack/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Consumir%20API/produtos.json"
async function procurar(){
    let resposta = await fetch(urlProdutos)
    let produtos = await resposta.json()

    for (let produto in produtos){
        document.body.innerHTML += `
            <div class="card">
                
                <img 
                    src ="${produtos[produto].img}"
                    alt="Não renderizou"
                    width="auto"
                    height="250"
                >
                <p class='titulo'> 
                    ${produtos[produto].nome}
                </p>
                <div class="valores">
                <p>
                    ${produtos[produto].descricao}
                </p>
                <span class="Sem">
                    R$ ${produtos[produto].valorSemDesconto}
                </span>
                <span class="Com">
                    R$ ${produtos[produto].valorComDesconto}
                </span>
                </div>
                <p>
                    ${produtos[produto].tipoEntrega}
                </p>

            </div
            `
    }

}
procurar()