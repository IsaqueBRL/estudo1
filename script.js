function mostrarSecao(secao) {
    // Esconde todas as seções
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Exibe a seção escolhida
    document.getElementById(secao).style.display = 'block';

    // Muda o título da página
    var titulo = document.getElementById('titulo');
    if (secao === 'dashboard') {
        titulo.innerText = 'Dashboard';
    } else if (secao === 'clientes') {
        titulo.innerText = 'Clientes';
    } else if (secao === 'produtos') {
        titulo.innerText = 'Produtos';
    }
}
