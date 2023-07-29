
var formulario = document.querySelector("form")
console.log(formulario)


formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let busca = document.getElementById("busca");
    
    urlForm += busca.value;
    urlForm = urlForm.toLocaleLowerCase();


    // ID img-pokemon
    let imagem = document.getElementById("img-pokemon")

    // id content
    let resposta = document.getElementById("content")

    //Resposta em HTML
    let html = "";

    //Busca na URL
    fetch(urlForm)
    .then(resposta => resposta.json())
    .then((data) => {
        console.log(data)
        html = "Nome: " + maiuscula(data.name) + "<br>" + 
        html + "Type: " + maiuscula(data.types[0].type.name) + "<br>" + 
        html + "Number: " + data.order;
        ;

        resposta.innerHTML = html


        imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'> " 
    })
    .catch((err) => {
        alert("Pokémon não encontrado")
        console.log(err)
    })
    // return urlForm + busca;
    busca.value = ""
    busca.focus()
})

const pesquisar = () => {

}


function maiuscula (valor) {
    return valor[0].toUpperCase() + valor.substr(1);
}