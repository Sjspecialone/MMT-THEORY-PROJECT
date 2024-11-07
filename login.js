document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear any previous error messages
    document.getElementById('error-message').textContent = '';

    // Get the values of username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (can be expanded later)
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
    } else if (username.length < 5 || password.length < 5) {
        document.getElementById('error-message').textContent = 'Username and password must be at least 5 characters.';
    } else {
        // Simulate successful login (here you can call an API or process login)
        alert('Login successful!');
        // Redirect or do something else after login success
    }
});
