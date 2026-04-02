// funcao para executar o cadastro.
document.getElementById("formConvidado").addEventListener("submit", function (evento) { 
    //funcao para nao perder o formulario quando a pagina for recarregada
    evento.preventDefault();

    //todo valor digitado dentro dos campos do form vai remover os espaçoes do inicio e do fim e atribuido a uma variavel
    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let empresa = document.getElementById("empresa").value.trim();

    // valida os campos um por um
    // se o campo tiver vazio mostra a mensagem de erro e usao o focus para colocar o cursor dentro do campo que esta vazio
    if (nome === "") {
        document.getElementById("mensagemErro").textContent = "Preencha o campo obrigatorio: Nome completo.";
        document.getElementById("nome").focus();
        return;
    }

    if (cpf === "") {
        document.getElementById("mensagemErro").textContent = "Preencha o campo obrigatorio: CPF.";
        document.getElementById("cpf").focus();
        return;
    }

    if (email === "") {
        document.getElementById("mensagemErro").textContent = "Preencha o campo obrigatorio: E-mail.";
        document.getElementById("email").focus();
        return;
    }

    if (telefone === "") {
        document.getElementById("mensagemErro").textContent = "Preencha o campo obrigatorio: Telefone.";
        document.getElementById("telefone").focus();
        return;
    }

    if (empresa === "") {
        document.getElementById("mensagemErro").textContent = "Preencha o campo obrigatorio: Empresa ou Instituicao.";
        document.getElementById("empresa").focus();
        return;
    }

    // o formulario vai ser enviado e a mensagem de erro e limpa.
    document.getElementById("mensagemErro").textContent = "";

    // remove o aviso de nenhum convidado confimado
    let listaVazia = document.getElementById("listaVazia");
    if (listaVazia) {
        listaVazia.remove();
    }

    // cria o card que vai guardar os dados do convidado.
    let card = document.createElement("article");
    card.className = "card-convidado";

    // criar os elementos de texto que vao er guardados dentro do card
    let titulo = document.createElement("h3");
    titulo.textContent = nome;

    let textoCpf = document.createElement("p");
    textoCpf.textContent = "CPF: " + cpf;

    let textoEmail = document.createElement("p");
    textoEmail.textContent = "E-mail: " + email;

    let textoTelefone = document.createElement("p");
    textoTelefone.textContent = "Telefone: " + telefone;

    let textoEmpresa = document.createElement("p");
    textoEmpresa.textContent = "Empresa: " + empresa;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "btn-remover";
    botaoRemover.type = "button";

    // criando botao para remover convidado
    botaoRemover.addEventListener("click", function () {
        card.remove();

        // depois de remover verifica se a lista ficou vazia.
        // se nao existir mais nenhum card, criamos novamente o aviso inicial.
        if (document.getElementById("listaConfirmados").children.length === 0) {
            let aviso = document.createElement("p");
            aviso.textContent = "Nenhum convidado confirmado ainda.";
            aviso.className = "lista-vazia";
            aviso.id = "listaVazia";
            document.getElementById("listaConfirmados").appendChild(aviso);
        }
    });

    // coloca todos os elementos do botao como filho do card
    card.appendChild(titulo);
    card.appendChild(textoCpf);
    card.appendChild(textoEmail);
    card.appendChild(textoTelefone);
    card.appendChild(textoEmpresa);
    card.appendChild(botaoRemover);

    // add o card
    document.getElementById("listaConfirmados").appendChild(card);

    //limpa o formulario depois de cadastrar e volta no campo de nome
    document.getElementById("formConvidado").reset();
    document.getElementById("nome").focus();
});

// funcao do esc quando clicado limpa os campos
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        document.getElementById("formConvidado").reset();
        document.getElementById("mensagemErro").textContent = "";
        document.getElementById("nome").focus();
    }
});

//mudar entre calro e escuro
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    // atualiza o estado do botao 
    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("toggleDarkMode").setAttribute("true");
    } else {
        document.getElementById("toggleDarkMode").setAttribute("false");
    }
});

//aviso inicial para quando nao tiver nenhum convidado confirmado ainda
let avisoInicial = document.createElement("p");
avisoInicial.textContent = "Nenhum convidado confirmado ainda.";
avisoInicial.className = "lista-vazia";
avisoInicial.id = "listaVazia";
document.getElementById("listaConfirmados").appendChild(avisoInicial);
