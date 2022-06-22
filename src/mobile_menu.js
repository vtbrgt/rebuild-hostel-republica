const botaoMenu = document.querySelector('.botao_menu');
const nav = document.querySelector('.nav');

/* mostrar menu ao clicar */
function mostraMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('ativo');
}

botaoMenu.addEventListener('click', mostraMenu);
