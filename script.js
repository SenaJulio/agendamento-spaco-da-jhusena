document.getElementById('formAgendamento').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('resposta').innerText = '✅ Agendamento realizado com sucesso!';
  this.reset();
});
