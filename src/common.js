const server = "https://backendonlinetasksapp.onrender.com";

function showError(err) {
  alert(`Ops! Algo está errado! Erro: ${err}`);
}

function showSuccess(msg) {
  alert(`Sucesso! ${msg}`);
}

export { server, showError, showSuccess };
