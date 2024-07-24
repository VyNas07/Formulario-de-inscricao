//
import {contatos} from "./bancoContatos.js"

let contato={
    getTodosContatos:function(){ //Mostra todos os contatos
        return contatos
    },
    getContato:function(i_cont){ // Procura um contato específico
        return contatos[i_cont];
    },
    addContato:function(novoContato, destinoDOM){ // Adiciona os contatos e mostra na página
        //Checa se os campos foram preenchidos
        if(novoContato.nome=='' || novoContato.telefone=='' || novoContato.email==''){
            alert('Preencha todos os campos');
            return;
        }

        //checa se o novo contato já existe no banco de dados
        const existe = contatos.some(cont => cont.nome === novoContato.nome && cont.telefone === novoContato.telefone && cont.email === novoContato.email);
        
        if (existe){
            alert('Contato já existe');
            return; //Para a função se o contato existir
        }
        
        //Se não existir, cria o contato no array e mostra na página
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        };
        contatos.push(cont);

        const div = document.createElement("div");
        div.setAttribute("class", "contato");
        const p_nome = document.createElement("p");
        p_nome.innerHTML = cont.nome;
        const p_telefone = document.createElement("p");
        p_telefone.innerHTML = cont.telefone;
        const p_email = document.createElement("p");
        p_email.innerHTML = cont.email;
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_email);
        

        destinoDOM.appendChild(div); // Anexa o novo contato

        // Limpa os campos do formulário
        document.getElementById('f_nome').value = '';
        document.getElementById('f_telefone').value = '';
        document.getElementById('f_email').value = '';
    },
    displayContacts: function() {
        destinoDOM.innerHTML = ''; // Clear the current display
        contatos.forEach((contato, index) => {
            const contactElement = document.createElement('div');
            contactElement.innerHTML = `
                <span>${contato.nome} - ${contato.telefone} - ${contato.email}</span>
                <button class="delete-btn" data-index="${index}">🗑️</button>
            `;
            destinoDOM.appendChild(contactElement);
        });
    },

    
    removeContato:function(i_cont){ // Remove um contato específico
        contatos.splice(i_cont,1);
    }
}

export default contato

