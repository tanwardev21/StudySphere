// Change navigation bar styles dynamically on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var navLinks = document.querySelectorAll('header nav ul li a');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        
        navLinks.forEach(link => {
            link.style.color = '#0A284C';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
        
        navLinks.forEach(link => {
            link.style.color = '#ffffff';
        });
    }
});

// Hover effect for navigation links
const navItems = document.querySelectorAll('header nav ul li a');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'red';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '#0A284C';  // Normal state color
    });
});
