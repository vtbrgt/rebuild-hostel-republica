const botaoMenu = document.querySelector('.botao_menu');

function mostraMenu(event) {
  if (event.type === 'touchstart')
    event.preventDefault(); /* previnir que o 'click' seja executado duas vezes no mobile por conta do 'touchstart' */
  const nav = document.querySelector('.nav');
  nav.classList.toggle('ativo');
}

botaoMenu.addEventListener('click', mostraMenu);

/* responsividade mobile (ux) */
botaoMenu.addEventListener('touchstart', mostraMenu);
