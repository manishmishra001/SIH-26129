// SETU Platform - Main JavaScript
// Handles navigation, interactions, and form handling

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Validate
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Show success message
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent';
        submitBtn.style.background = '#28a745';

        // Reset form
        this.reset();

        // Restore button
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .feature-card, .about-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// NAVBAR ACTIVE STATE
// ============================================

window.addEventListener('scroll', () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// Add active style to nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color, #0066cc);
        border-bottom: 3px solid var(--primary-color, #0066cc);
        padding-bottom: 2px;
    }
`;
document.head.appendChild(style);

// ============================================
// THEME TOGGLE (Optional dark mode)
// ============================================

function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    applyTheme(theme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// ============================================
// LOADING ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add animation to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease forwards';
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// LOCAL STORAGE UTILITIES
// ============================================

const StorageManager = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage error:', e);
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Storage error:', e);
        }
    }
};

// ============================================
// SESSION MANAGEMENT
// ============================================

// const SessionManager = {
//     init: () => {
//         const user = StorageManager.get('currentUser');
//         if (!user && window.location.pathname.includes('dashboard')) {
//             window.location.href = 'citizen-login.html';
//         }
//     },

//     login: (userId, userType) => {
//         StorageManager.set('currentUser', {
//             id: userId,
//             type: userType,
//             loginTime: new Date()
//         });
//     },

//     logout: () => {
//         StorageManager.remove('currentUser');
//         window.location.href = 'index.html';
//     },

//     getCurrentUser: () => {
//         return StorageManager.get('currentUser');
//     },

//     isLoggedIn: () => {
//         return StorageManager.get('currentUser') !== null;
//     }
// };

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
    // Could send to error tracking service
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Would focus search input if available
    }

    // Escape: Close modals/menus
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}

// ============================================
// ACCESSIBILITY
// ============================================

// Enhance focus visibility
const style2 = document.createElement('style');
style2.textContent = `
    *:focus-visible {
        outline: 2px solid var(--primary-color, #0066cc);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style2);

console.log('SETU Platform initialized successfully');
