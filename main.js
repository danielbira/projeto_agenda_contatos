const form = document.getElementById('form-contato')
const imgContato = '<img src="./images/contatos.png" alt="Contato" />';
const pessoa = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();


    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTelefonepessoa = document.getElementById('telefone-pessoa');

    if (pessoa.includes(inputNomePessoa.value)) {
        alert(`O nome: ${inputNomePessoa.value}, já está inserida`);
    }else {
        pessoa.push(inputNomePessoa.value);
    
        let linha = '<tr>';  
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputTelefonepessoa.value}</td>`;
        linha += `<td>${imgContato}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

        inputNomePessoa.value = '';
        inputTelefonepessoa.value = '';

}

function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
}
