document.querySelectorAll('.btn.secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    const nomePet = btn.parentElement.querySelector('h3')?.textContent || "este anjinho";

    document.getElementById('nomePet').textContent = nomePet;

    document.getElementById('adocaoModal').style.display = 'flex';
  });
});

document.querySelector('.close-btn')?.addEventListener('click', () => {
  document.getElementById('adocaoModal').style.display = 'none';
});

document.getElementById('adocaoModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});

document.getElementById('formAdocao')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const dados = {
    pet: document.getElementById('nomePet').textContent,
    nome: document.getElementById('nome').value,
    cpf: document.getElementById('cpf').value,
    telefone: document.getElementById('telefone').value,
    cidade: document.getElementById('cidade').value,
    endereco: document.getElementById('endereco').value,
  };

  console.log("Dados de adoção:", dados);
  alert("Solicitação enviada com sucesso! 🐱💕\nEm breve entraremos em contato.");

  document.getElementById('adocaoModal').style.display = 'none';
  e.target.reset();
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
