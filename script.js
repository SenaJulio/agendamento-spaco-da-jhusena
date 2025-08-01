document.addEventListener('DOMContentLoaded', () => {
  // Seta a data mínima para hoje
  const inputData = document.getElementById('data');
  const hoje = new Date().toISOString().split('T')[0];
  inputData.min = hoje;

  // Referências do formulário e mensagem
  const form = document.getElementById('agendamento-form');
  const msgSucesso = document.getElementById('msg-sucesso');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      nome: document.getElementById('nome').value,
      cliente: document.getElementById('pet').value,
      telefone: document.getElementById('telefone').value,
      email: document.getElementById('email').value,
      servico: document.getElementById('servico').value,
      data: document.getElementById('data').value,
      hora: document.getElementById('hora').value,
    };

    try {
      const response = await fetch('https://SEU_BACKEND.com/api/agendamentos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.reset();
        msgSucesso.hidden = false;
        setTimeout(() => (msgSucesso.hidden = true), 5000);
      } else {
        alert('Erro ao agendar. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  });
});
