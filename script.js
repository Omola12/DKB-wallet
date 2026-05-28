// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials check
    if (email === 'highrevinkevin3@gmail.co' && password === '#Highkevin@109') {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please use the demo account shown below.');
    }
});

// Check if already logged in
if (window.location.pathname.includes('dashboard.html')) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}
