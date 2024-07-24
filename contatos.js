import { contatos } from "./bancoContatos.js";
//Atualizado


let contato = {
    getTodosContatos: function () {
        return contatos;
    },
    getContato: function (i_cont) {
        return contatos[i_cont];
    },
    addContato: function (novoContato, destinoDOM) {
        if (novoContato.nome == '' || novoContato.telefone == '' || novoContato.email == '') {
            alert('Preencha todos os campos');
            return;
        }

        const existe = contatos.some(cont => cont.nome === novoContato.nome && cont.telefone === novoContato.telefone && cont.email === novoContato.email);
        
        if (existe) {
            alert('Contato já existe');
            return;
        }

        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        };
        contatos.push(cont);

        this.displayContato(destinoDOM);
        this.limpar();
    },
    displayContato: function (destinoDOM) {
        destinoDOM.innerHTML = '';
        contatos.forEach((contato, index) => {
            const contactElement = document.createElement('div');
            contactElement.setAttribute("class", "contato");
            contactElement.innerHTML = `
                <p>${contato.nome}</p>
                <p>${contato.telefone}</p>
                <p>${contato.email}</p>
                <button class="delete-btn" data-index="${index}">🗑️</button>
            `;
            destinoDOM.appendChild(contactElement);
        });

        const deleteButtons = destinoDOM.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                this.removeContato(index, destinoDOM);
            });
        });
    },
    removeContato: function (i_cont, destinoDOM) {
        contatos.splice(i_cont, 1);
        this.displayContato(destinoDOM);
    },
    limpar: function () {
        document.getElementById('f_nome').value = '';
        document.getElementById('f_telefone').value = '';
        document.getElementById('f_email').value = '';
    }
};

export default contato;
