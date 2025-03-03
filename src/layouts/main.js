export function handleThemeChange(event) {
    // Handle theme change from toggle-theme component
    const theme = event.detail.theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
