// script.js
const svgIcon = document.getElementById('svg-icon');

// Function to detect system theme change
function detectTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        svgIcon.setAttribute('fill', '#FFFFFF');  // White for dark mode
    } else {
        svgIcon.setAttribute('fill', '#000000');  // Black for light mode
    }
}

// Detect theme on page load
detectTheme();

// Listen for theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
