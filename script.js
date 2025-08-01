document.addEventListener('DOMContentLoaded', () => {
  // Seta a data mínima para hoje (pro usuário não escolher datas passadas)
  const inputData = document.getElementById('data');
  const hoje = new Date().toISOString().split('T')[0];
  inputData.min = hoje;

  // Form e mensagem de sucesso
  const form = document.getElementById('agendamento-form');
  const msgSucesso = document.getElementById('msg-sucesso');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Aqui você pode adicionar o código pra enviar os dados para seu backend ou API
    // Por enquanto só mostra a mensagem de sucesso e reseta o formulário

    form.reset();
    msgSucesso.hidden = false;

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      msgSucesso.hidden = true;
    }, 5000);
  });
});
