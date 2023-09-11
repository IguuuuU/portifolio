// let button = document.querySelector(".btn-card");

// const acessarlink01 = () => {
//     window.location.href='https://youtu.be/dQw4w9WgXcQ';
// }
// const acessarlink02 = () => {
//     window.location.href='https://youtu.be/dQw4w9WgXcQ';
// }
// const acessarlink03 = () => {
//     window.location.href='https://youtu.be/dQw4w9WgXcQ';
// }

// let buttonrs = document.querySelector(".btnrs");

// button.addEventListener("click", acessarLink01);

// button.addEventListener("click", acessarlink4)

const abrirWhatsapp = () => {
    let number = "5521976439883";
    let msg = document.getElementById("msg").value;
    let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;
    window.open(target);
}

const tabelaProjetos = document.getElementById('tabela-projetos').getElementsByTagName('tbody')[0];

fetch('http://localhost:3000/projetos')
.then(response => response.json())
.then(projetos => {
    projetos.forEach(projeto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${projeto.id}</td>
        <td><img src=${projeto.imagem}></td>
        <td>${projeto.nome}</td>
        <td>${projeto.descricao}</td>
        <td><a href="${projeto.link}" target="_blank">${projeto.link}</a></td>
        `;
        tabelaProjetos.appendChild(linha);       
    });
})
.catch(error => {
    console.error('Erro ao buscar projetos:', error);
});