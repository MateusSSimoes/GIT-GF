// Cronômetro
const dataInicio = new Date('2023-03-29T00:00:00');

function atualizarCronometro() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('cronometro').textContent = 
    `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(atualizarCronometro, 1000);

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

