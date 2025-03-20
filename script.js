document.getElementById('submitBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const outputDiv = document.getElementById('output');

    const name = nameInput.value;
    const password = passwordInput.value;

    if (name && password) {
        outputDiv.innerText = `Микки1: ${name}\nМикки2: ${password}`;
    } else {
        outputDiv.innerText = 'Пожалуйста, заполните все поля.';
    }
});
