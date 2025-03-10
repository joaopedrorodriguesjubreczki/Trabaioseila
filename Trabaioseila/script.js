// Claro e Escuro Troca
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}

// Usuario
const users = [
    { email: 'joao@unicesumar.com', password: '12345', name: 'João', age: 19 },
    { email: 'mateus@unicesumar.com', password: '12345', name: 'Mateus', age: 19 }
];

// Login
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-age-message').textContent = `Sua idade: ${user.age} anos.`;
    } else {
        loginMessage.textContent = 'Email ou senha incorretos.';
        loginMessage.style.color = 'red';
    }
}

// Calcular + e -
function calculate(isAdd = true) {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(value1) || isNaN(value2)) {
        resultElement.textContent = 'Por favor, insira valores válidos.';
    } else {
        const result = isAdd ? value1 + value2 : value1 - value2;
        resultElement.textContent = `Resultado: ${result}`;
    }
}

document.body.classList.add('light-mode');