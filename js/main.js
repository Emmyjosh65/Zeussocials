// Main JavaScript
console.log('ZeusSocials - Social Media Marketing Platform');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('userToken') !== null;
}

// Update navigation based on login status
function updateNavigation() {
    const authBtn = document.querySelector('.auth-btn');
    if (isUserLoggedIn()) {
        authBtn.textContent = 'Dashboard';
        authBtn.href = 'pages/dashboard.html';
    }
}

updateNavigation();

// Analytics tracking
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // Firebase analytics can be integrated here
}
