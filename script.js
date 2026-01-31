// Scrib Landing Page - 2026 Best Practices
// Minimal JS: Theme toggle + fade-in animations

const THEME_KEY = 'scrib-theme';

// ==================== THEME MANAGEMENT ====================

function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;

    // Check system preference, default to dark for privacy-focused app
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
        meta.content = theme === 'dark' ? '#0a0a0a' : '#FAFAFA';
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
}

// ==================== FADE-IN ANIMATIONS ====================

function setupFadeInAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    if (!elements.length) return;

    // Use IntersectionObserver for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// ==================== STICKY CTA VISIBILITY ====================

function setupStickyCta() {
    const stickyCta = document.querySelector('.sticky-cta');
    const finalCta = document.querySelector('.final-cta');

    if (!stickyCta || !finalCta) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Hide sticky when final CTA is visible
            stickyCta.style.opacity = entry.isIntersecting ? '0' : '1';
            stickyCta.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
        });
    }, { threshold: 0.5 });

    observer.observe(finalCta);
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Apply theme immediately
    applyTheme(getPreferredTheme());

    // Setup theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Setup animations
    setupFadeInAnimations();
    setupStickyCta();

    // Listen for system theme changes
    window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
});

// ==================== ANALYTICS (Optional) ====================

// Track CTA clicks if gtag is available
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="play.google.com"]');
    if (link && typeof gtag === 'function') {
        gtag('event', 'cta_click', {
            event_category: 'engagement',
            event_label: link.id || 'play_store_link'
        });
    }
});
