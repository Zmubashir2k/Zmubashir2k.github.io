// SYSTEM INIT LOGIC

document.addEventListener("DOMContentLoaded", () => {
    console.log("%c SYSTEM INITIALIZED: ZAIN_MUBASHIR_PORTFOLIO.EXE", "color: #39ff14; font-weight: bold; font-size: 14px;");
    console.log("%c LOCATION: BARTLETT, IL | STATUS: ACTIVELY SEEKING NEW DEPLOYMENT", "color: #8a2be2;");
    
    const typeWriterElement = document.getElementById("typewriter");
    const phrases = [
        "> INITIALIZING PORTFOLIO...",
        "> LOADING FULL-STACK DEPENDENCIES...",
        "> COMPILING JAVA, PYTHON, C++, JAVASCRIPT...",
        "> ESTABLISHING DATABASE CONNECTIONS...",
        "> SYSTEM READY. WELCOME, RECRUITER."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeWriterElement.innerText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 25;
        } else {
            typeWriterElement.innerText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            if (phraseIndex === phrases.length - 1) {
                // Stop on the last phrase
                return; 
            }
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start typewriter effect after a brief delay
    setTimeout(type, 1000);
});