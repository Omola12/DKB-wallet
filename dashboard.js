// Check authentication
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (!isLoggedIn) {
    window.location.href = 'index.html';
}

// Display user email
document.getElementById('userEmail').textContent = localStorage.getItem('userEmail');

// Function to show popup message
function showFrozenMessage() {
    const popup = document.getElementById('messagePopup');
    popup.style.display = 'flex';
}

// Function to close popup
window.closePopup = function() {
    const popup = document.getElementById('messagePopup');
    popup.style.display = 'none';
}

// Send button click handler
document.getElementById('sendBtn').addEventListener('click', function() {
    showFrozenMessage();
});

// Withdraw button click handler
document.getElementById('withdrawBtn').addEventListener('click', function() {
    showFrozenMessage();
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
});

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.getElementById('messagePopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
