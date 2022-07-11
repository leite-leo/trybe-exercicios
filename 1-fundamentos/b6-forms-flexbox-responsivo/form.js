const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
})

const inputNome = document.getElementById('name');
const inputMail = document.getElementById('mail');
const radioCidade = document.getElementById('cidade');
const radioCampo = document.getElementById('campo');
const radioPraia = document.getElementById('praia');
const radioMontanhas = document.getElementById('montanhas');
const textarea = document.getElementById('text-area');
const data = document.getElementById('data');
const chkbxOferta = document.getElementById('receber-ofertas');
const chkbxImagem = document.getElementById('ceder-imagem');
const btnLimpar = document.getElementById('limpar');

btnLimpar.addEventListener('click', () => {
  document.getElementById('name').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('campo').value = '';
  document.getElementById('praia').value = '';
  document.getElementById('montanhas').value = '';
  document.getElementById('text-area').value = '';
  document.getElementById('data').value = '';
})