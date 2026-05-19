const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){

    event.preventDefault();

    const nome = document.getElementById('nome').value;

    alert(`Olá ${nome}, sua solicitação foi enviada com sucesso! Nossa equipe da Aragão Corretora entrará em contato em breve.`);

    formulario.reset();

});