const form = document.getElementById("formCadastro");
const btnParticipar = document.getElementById("btnParticipar");
const loading = document.getElementById("loading");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita o reload da página

    // pega os dados do formulário
    const nome = document.getElementById("nomeCompleto").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const idBetboom = document.getElementById("idBetboom").value.trim();

    // valida se todos os campos estão preenchidos
    if (!nome || !whatsapp || !idBetboom) {
        alert('❌ Por favor, preencha todos os campos!');
        return;
    }

    // mostra mensagem de carregando
    loading.style.display = "block";
    btnParticipar.disabled = true;

    // salva no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("whatsapp", whatsapp);
    localStorage.setItem("idBetboom", idBetboom);

    // redireciona para a página 2 após 1s (simulando envio)
    setTimeout(() => {
        window.location.href = "indexpg02.html"; // ou 'pagina2.html' dependendo do nome do arquivo
    }, 1000);
});
