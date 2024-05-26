document.getElementById('theme-toggle').addEventListener('click', function() {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'light') {
        root.setAttribute('data-theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
    }
});
