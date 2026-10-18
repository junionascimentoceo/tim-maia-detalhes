// Dados fictícios/ilustrativos dos álbuns (formato JSON)
const dados = [
    {
        "id": 1,
        "titulo": "Tim Maia",
        "ano": 1970,
        "categoria": "Soul",
        "descricao": "Álbum de estreia solo, que apresenta o soul brasileiro ao grande público.",
        "conteudo": "Primeiro álbum solo de Tim Maia, lançado em 1970. O disco mistura soul, funk e MPB e ajudou a estabelecer o estilo que o tornaria o Rei do Soul Brasileiro.",
        "faixas": ["Azul da Cor do Mar", "Primavera (Vai Chuva)", "Coroné Antonio Bento"],
        "imagem": "https://picsum.photos/id/128/600/600"
    },
    {
        "id": 2,
        "titulo": "Tim Maia",
        "ano": 1971,
        "categoria": "Soul",
        "descricao": "Segundo álbum de estúdio, consolidando o estilo soul do artista.",
        "conteudo": "Lançado em 1971, o segundo disco manteve a linha do primeiro e reforçou a presença de Tim Maia na música popular brasileira, com arranjos marcados por metais e groove.",
        "faixas": ["Faixa de exemplo 1", "Faixa de exemplo 2", "Faixa de exemplo 3"],
        "imagem": "https://picsum.photos/id/145/600/600"
    },
    {
        "id": 3,
        "titulo": "Racional Vol. 1",
        "ano": 1975,
        "categoria": "Fase Racional",
        "descricao": "Disco marcado pela fase racional, com sonoridade funk e letras filosóficas.",
        "conteudo": "Lançado em 1975, durante o período em que Tim Maia seguiu a Cultura Racional. O álbum tem letras ligadas a essa filosofia e uma sonoridade funk bem característica.",
        "faixas": ["Faixa de exemplo 1", "Faixa de exemplo 2", "Faixa de exemplo 3"],
        "imagem": "https://picsum.photos/id/160/600/600"
    },
    {
        "id": 4,
        "titulo": "Nova Era Glacial",
        "ano": 1982,
        "categoria": "Soul",
        "descricao": "Retorno ao soul clássico após a fase racional.",
        "conteudo": "Lançado em 1982, o disco marca a volta de Tim Maia a uma sonoridade soul mais clássica, depois do período racional.",
        "faixas": ["Faixa de exemplo 1", "Faixa de exemplo 2", "Faixa de exemplo 3"],
        "imagem": "https://picsum.photos/id/180/600/600"
    }
];

// ---------- HOME: monta os cards dinamicamente ----------
function montarCards() {
    const lista = document.getElementById("lista-albuns");

    dados.forEach(function (album) {
        const coluna = document.createElement("div");
        coluna.className = "col-12 col-sm-6 col-md-3";

        coluna.innerHTML =
            '<article class="album h-100">' +
                '<a href="detalhes.html?id=' + album.id + '">' +
                    '<img src="' + album.imagem + '" alt="Capa do álbum ' + album.titulo + '" class="img-fluid rounded">' +
                    '<h3>' + album.titulo + '</h3>' +
                '</a>' +
                '<p>' + album.ano + ' — ' + album.descricao + '</p>' +
                '<a href="detalhes.html?id=' + album.id + '" class="btn btn-warning btn-sm">Ver detalhes</a>' +
            '</article>';

        lista.appendChild(coluna);
    });
}

// ---------- DETALHES: lê o id da query string ----------
function montarDetalhes() {
    const container = document.getElementById("detalhe-album");
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const album = dados.find(function (item) {
        return item.id === id;
    });

    if (!album) {
        container.innerHTML =
            '<h2>Álbum não encontrado</h2>' +
            '<a href="index.html#albuns" class="btn btn-warning">Voltar para os álbuns</a>';
        return;
    }

    document.title = album.titulo + " (" + album.ano + ") - Tim Maia";

    let faixasHtml = "";
    album.faixas.forEach(function (faixa) {
        faixasHtml += "<li>" + faixa + "</li>";
    });

    container.innerHTML =
        '<div class="row align-items-center g-4">' +
            '<div class="col-12 col-md-5">' +
                '<img src="' + album.imagem + '" alt="Capa do álbum ' + album.titulo + '" class="img-fluid rounded">' +
            '</div>' +
            '<div class="col-12 col-md-7">' +
                '<h1>' + album.titulo + '</h1>' +
                '<p><strong>Ano:</strong> ' + album.ano + '</p>' +
                '<p><strong>Categoria:</strong> ' + album.categoria + '</p>' +
                '<p>' + album.conteudo + '</p>' +
                '<h2 class="h5">Faixas</h2>' +
                '<ul>' + faixasHtml + '</ul>' +
                '<a href="index.html#albuns" class="btn btn-warning">Voltar para os álbuns</a>' +
            '</div>' +
        '</div>';
}

// ---------- Decide qual página está aberta ----------
if (document.getElementById("lista-albuns")) {
    montarCards();
}

if (document.getElementById("detalhe-album")) {
    montarDetalhes();
}