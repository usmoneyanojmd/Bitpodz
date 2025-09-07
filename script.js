document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Simple demo response (replace with real auth later)
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `
        <p>Login attempt recorded (demo):</p>
        <p>Email: ${email}</p>
        <p>Remember me: ${remember ? 'Yes' : 'No'}</p>
    `;
    messageDiv.style.display = 'block';

    // Reset form if "Remember me" isn't checked
    if (!remember) {
        e.target.reset();
    }
});

document.getElementById('registerLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Registration page would open here');
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset page would open here');
});