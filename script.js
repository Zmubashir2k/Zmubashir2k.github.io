// INITIALIZATION SEQUENCE
console.log("%c SYSTEM BOOT...", "color: #ccff00; font-weight: bold;");
console.log("%c ZAIN MUBASHIR // FULL-STACK ENGINEER", "color: #9d00ff; font-weight: bold;");
console.log("Loading modules... [OK]");
console.log("Connecting to network... [OK]");
console.log("Welcome to the portfolio mainframe.");

// Simple scroll reveal or interactive elements can be added here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});