document.querySelectorAll('.btn.secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Que lindo! 💕\nVamos conversar sobre a adoção da " + 
          btn.parentElement.querySelector('h3').textContent + "? Enviaremos mais informações em breve! 🐱");
  });
});

const modal = document.getElementById('modal-contato');
const btnAbrir = document.getElementById('btn-abrir-contato');
const btnFechar = document.querySelector('.close-modal');

if (btnAbrir && modal && btnFechar) {
  btnAbrir.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}