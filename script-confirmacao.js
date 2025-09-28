window.addEventListener("DOMContentLoaded", () => {
    // pega dados do localStorage
    const nome = localStorage.getItem("nome");
    const whatsapp = localStorage.getItem("whatsapp");
    const idBetboom = localStorage.getItem("idBetboom");

    // verifica se existem dados
    if (nome && whatsapp && idBetboom) {
        // atualiza o header
        const headerSubtitulo = document.querySelectorAll(".header .subtitulo");
        headerSubtitulo[1].textContent = `${nome}, Bem-vindo ao TeleShow!`;

        // atualiza os dados do usuário
        const dadoItens = document.querySelectorAll(".dado-item p");
        dadoItens[0].textContent = nome;
        dadoItens[1].textContent = whatsapp;
        dadoItens[2].textContent = idBetboom;
    } else {
        // se não houver dados, volta para página 1
        window.location.href = "index.html";
    }
});
// Pega os dados do localStorage
const nome = localStorage.getItem('nome');
const whatsapp = localStorage.getItem('whatsapp');
const idBetboom = localStorage.getItem('idBetboom');

// Preenche os campos no HTML
document.getElementById('nomeUsuario').textContent = nome;
document.getElementById('whatsappUsuario').textContent = whatsapp;
document.getElementById('idUsuario').textContent = idBetboom;
