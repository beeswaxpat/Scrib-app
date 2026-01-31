// Scrib Landing Page - Minimal JavaScript
// Theme toggle and analytics tracking

// ==================== THEME MANAGEMENT ====================

const THEME_KEY = 'scrib-theme';

/**
 * Get the user's preferred theme
 * Priority: localStorage > system preference > light
 */
function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
        return saved;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update theme toggle icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.content = theme === 'dark' ? '#121212' : '#26A69A';
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';

    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);

    // Track theme change in analytics
    trackEvent('theme_toggle', { theme: next });
}

// ==================== ANALYTICS ====================

/**
 * Track events to Google Analytics
 * Safe wrapper that handles missing gtag
 */
function trackEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
    }
}

/**
 * Track CTA button clicks
 */
function trackCTAClick(buttonId, buttonText) {
    trackEvent('cta_click', {
        button_id: buttonId,
        button_text: buttonText,
        page_location: window.location.href
    });
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applyTheme(getPreferredTheme());

    // Setup theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Track CTA clicks
    setupCTATracking();

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem(THEME_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
});

/**
 * Setup click tracking for all CTA buttons
 */
function setupCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            const buttonId = button.id || `cta-${index}`;
            trackCTAClick(buttonId, buttonText);
        });
    });
}

// ==================== SMOOTH SCROLL ====================

/**
 * Smooth scroll to element (for any future internal links)
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================== SERVICE WORKER ====================

// Register service worker for offline support (optional for landing page)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/static/sw.js')
            .then(registration => {
                console.log('SW registered:', registration.scope);
            })
            .catch(error => {
                // Silently fail - SW is optional for landing page
                console.log('SW registration skipped');
            });
    });
}
