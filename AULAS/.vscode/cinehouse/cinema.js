let cinema = "cinehouse"
console.log(cinema)

[
    {
      "codigo": 1,
      "titulo": "Harry Potter e a Pedra Filosofal",
      "duracao": 2.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2001,
      "emCartaz": true
    },
    {
      "codigo": 2,
      "titulo": "Harry Potter e a Câmara Secreta",
      "duracao": 2.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2002,
      "emCartaz": true
    },
    {
      "codigo": 3,
      "titulo": "Harry Potter e o Prisioneiro de Azkaban",
      "duracao": 3.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2004,
      "emCartaz": false
    },
    {
      "codigo": 4,
      "titulo": "O Massacre da Serra Elétrica",
      "duracao": 1.5,
      "atores": ["Cassio", "Ygor Silva"],
      "anoDeLancamento": 2022,
      "emCartaz": true
    },
    {
      "codigo": 5,
      "titulo": "WiFi Ralph: Quebrando a Internet",
      "duracao": 1.5,
      "atores": ["John C. Reilly", "Sarah Silverman"],
      "anoDeLancamento": 2018,
      "emCartaz": false
    }
  ]

  const catalogo = require('./database/catalogo.json');

const listarTodosOsFilmesEmCartaz = () => {
    forEach((filme) => console.log(`nome do filme: ${filme.titulo}`));
};

const buscarFilme = (codigoParametro) => catalogo.find((filme) => filme.codigo == codigoParametro);

const alterarStatusEmCartaz = (codigo,callback) => {
    let filme = callback(codigo);

  if (!filme){
    console.log("Filme não encontrado")
    return null;
  }

  filme.emCartaz == true? filme.emCartaz = false: filme.emCartaz = true;
    return filme;
}

const adicionarFilme = (filme) => {
    const {codigo, titulo, atores, duracao, anoDeLancamento}  = filme;

  if(!duracao){
    console.log("Nao é possível adicionar um filme sem duração");
    return
  }
const filmeParaAdicionar = {
  ...filme,
  emCartaz : true
}

  push(filmeParaAdicionar);
  return filmeParaAdicionar;
}

push({
     codigo: 6, 
     titulo: "O Poderoso Chefão",
     atores: ["Marlon Brando", "Al Pacino", "James Caan"],
     duracao: 3.5,
     anoDeLancamento: 1972
})

let listarFilmesComLongaDuracao = catalogo.filter(function(filme){
    return filme.duracao > 2;
}); 
    
    