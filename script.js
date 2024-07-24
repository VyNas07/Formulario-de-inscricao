
import contato from "./contatos.js";
//Atualizado

const listaContatos = document.getElementById("listaContatos");
const btn_gravar = document.getElementById("btn_gravar");

btn_gravar.addEventListener("click", (evt) => {
    const cont = {
        nome: document.getElementById("f_nome").value,
        telefone: document.getElementById("f_telefone").value,
        email: document.getElementById("f_email").value
    };
    contato.addContato(cont, listaContatos);
    console.log(contato.getTodosContatos());
});

// Inicializa a exibição dos contatos.
contato.displayContato(listaContatos);

