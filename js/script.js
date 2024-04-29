// Verifica se o 'darkMode' está salvo no localStorage
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
// 1. Adiciona a classe ao body
document.body.classList.add('darkmode');
// 2. Atualiza o darkMode no localStorage
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
// 1. Remove a classe do body
document.body.classList.remove('darkmode');
// 2. Atualiza o darkMode no localStorage
localStorage.setItem('darkMode', null);
}

// Se o usuário já visitou e ativou o darkMode
// comece com ele ativado
if (darkMode === 'enabled') {
enableDarkMode();
}

// Quando alguém clica no botão
darkModeToggle.addEventListener('click', () => {
// obtém a configuração atual de darkMode
darkMode = localStorage.getItem('darkMode');

// se não estiver atualmente ativado, ative-o
if (darkMode !== 'enabled') {
enableDarkMode();
// se já estiver ativado, desative-o
} else {
disableDarkMode();
}
});