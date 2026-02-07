/* ============================================
   CYBERPUNK HACKER LANDING PAGE
   Keyboard-driven interactivity & Matrix effects
   ============================================ */

// Track pressed keys for combos
const keysPressed = {};

// Matrix rain effect elements
let matrixActive = false;

// Keyboard event handler - map all keystrokes to functions
document.addEventListener('keydown', (e) => {
    keysPressed[e.key.toLowerCase()] = true;
    
    const key = e.key.toLowerCase();
    
    // Individual key handlers
    switch(key) {
        case 'm':
            if (keysPressed['control']) {
                e.preventDefault();
                triggerMatrixRain();
            }
            break;
        case 'g':
            if (keysPressed['control']) {
                e.preventDefault();
                triggerGlitch();
            }
            break;
        case 's':
            if (keysPressed['control']) {
                e.preventDefault();
                triggerScan();
            }
            break;
        case 'n':
            if (keysPressed['control']) {
                e.preventDefault();
                triggerNeonFlash();
            }
            break;
        case 'r':
            if (keysPressed['control']) {
                e.preventDefault();
                triggerRandomTerminalLine();
            }
            break;
        case 'c':
            if (keysPressed['control'] && keysPressed['shift']) {
                e.preventDefault();
                triggerCyberPulse();
            }
            break;
        case '?':
            triggerHelpMenu();
            break;
        case 'escape':
            closeHelpMenu();
            break;
    }
});

document.addEventListener('keyup', (e) => {
    keysPressed[e.key.toLowerCase()] = false;
});

// ============================================
// HACKER EFFECTS
// ============================================

// Matrix rain effect
function triggerMatrixRain() {
    if (matrixActive) return;
    matrixActive = true;
    
    const terminal = document.querySelector('.terminal-body');
    const lines = terminal.querySelectorAll('.terminal-line');
    
    lines.forEach(line => {
        line.style.opacity = '0.3';
        line.style.animation = 'matrix-rain 0.8s ease-in-out';
    });
    
    setTimeout(() => {
        lines.forEach(line => {
            line.style.opacity = '1';
            line.style.animation = '';
        });
        matrixActive = false;
    }, 800);
    
    addTerminalLog('> MATRIX_PROTOCOL activated');
}

// Glitch effect on entire page
function triggerGlitch() {
    const body = document.body;
    body.style.animation = 'page-glitch 0.4s ease';
    
    setTimeout(() => {
        body.style.animation = '';
    }, 400);
    
    addTerminalLog('> GLITCH_SYSTEM triggered');
}

// Scan effect
function triggerScan() {
    const hero = document.querySelector('.hero');
    const scanner = document.createElement('div');
    scanner.className = 'scanner-effect';
    scanner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff41, transparent);
        box-shadow: 0 0 20px #00ff41;
        z-index: 9999;
        animation: scan-down 2s linear;
    `;
    
    document.body.appendChild(scanner);
    setTimeout(() => scanner.remove(), 2000);
    
    addTerminalLog('> SCAN_COMPLETE');
}

// Neon flash effect
function triggerNeonFlash() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00ff41;
        opacity: 0;
        z-index: 9998;
        pointer-events: none;
        animation: flash-pulse 0.6s ease;
    `;
    
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 600);
    
    addTerminalLog('> NEON_FLASH initiated');
}

// Random terminal command
function triggerRandomTerminalLine() {
    const commands = [
        '> Access granted to NEXUS_CORE',
        '> Downloading classified algorithms...',
        '> Firewall bypassed: SUCCESSFUL',
        '> Neural encryption: UNBREAKABLE',
        '> Quantum processor: 99.99% efficiency',
        '> All systems: OPERATIONAL',
        '> Security threat detected: MITIGATED',
        '> Data transfer rate: MAXIMUM',
        '> Cache memory: OPTIMIZED'
    ];
    
    const random = commands[Math.floor(Math.random() * commands.length)];
    addTerminalLog(random);
}

// Cyber pulse effect
function triggerCyberPulse() {
    document.querySelectorAll('.feature-card, .terminal-window').forEach(el => {
        el.style.animation = 'cyber-pulse 0.8s ease';
    });
    
    setTimeout(() => {
        document.querySelectorAll('.feature-card, .terminal-window').forEach(el => {
            el.style.animation = '';
        });
    }, 800);
    
    addTerminalLog('> CYBER_PULSE broadcasted');
}

// Add line to terminal
function addTerminalLog(message) {
    const terminal = document.querySelector('.terminal-body');
    const newLine = document.createElement('div');
    newLine.className = 'terminal-line';
    newLine.style.cssText = `
        color: #00ff41;
        animation: type-in 0.5s ease;
    `;
    newLine.textContent = message;
    terminal.appendChild(newLine);
    
    // Scroll to bottom
    terminal.parentElement.scrollTop = terminal.parentElement.scrollHeight;
}

// ============================================
// HELP MENU
// ============================================

function triggerHelpMenu() {
    if (document.querySelector('.help-menu')) return;
    
    const helpMenu = document.createElement('div');
    helpMenu.className = 'help-menu';
    helpMenu.innerHTML = `
        <div class="help-content">
            <div class="help-header">
                <h2>[ HACKER CONTROLS ]</h2>
                <span class="help-close">&times;</span>
            </div>
            <div class="help-body">
                <div class="help-item">
                    <span class="key">Ctrl + M</span>
                    <span class="desc">Matrix Rain Effect</span>
                </div>
                <div class="help-item">
                    <span class="key">Ctrl + G</span>
                    <span class="desc">Glitch Page</span>
                </div>
                <div class="help-item">
                    <span class="key">Ctrl + S</span>
                    <span class="desc">Scan System</span>
                </div>
                <div class="help-item">
                    <span class="key">Ctrl + N</span>
                    <span class="desc">Neon Flash</span>
                </div>
                <div class="help-item">
                    <span class="key">Ctrl + R</span>
                    <span class="desc">Random Command</span>
                </div>
                <div class="help-item">
                    <span class="key">Ctrl + Shift + C</span>
                    <span class="desc">Cyber Pulse</span>
                </div>
                <div class="help-item">
                    <span class="key">?</span>
                    <span class="desc">Show This Menu</span>
                </div>
                <div class="help-item">
                    <span class="key">ESC</span>
                    <span class="desc">Close Menu</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(helpMenu);
    
    helpMenu.querySelector('.help-close').addEventListener('click', closeHelpMenu);
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeHelpMenu();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function closeHelpMenu() {
    const helpMenu = document.querySelector('.help-menu');
    if (helpMenu) {
        helpMenu.style.animation = 'fade-out 0.3s ease';
        setTimeout(() => helpMenu.remove(), 300);
    }
}

// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.textShadow = '';
        if (link.getAttribute('href').includes(currentSection)) {
            link.style.color = 'var(--neon-cyan)';
            link.style.textShadow = 'var(--glow-cyan)';
        }
    });
});

// Parallax effect for grid background
window.addEventListener('scroll', () => {
    const grid = document.querySelector('.grid-background');
    if (grid) {
        grid.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

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

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Glitch on nav logo hover
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    glitchText.addEventListener('mouseenter', () => {
        glitchText.style.animation = 'glitch-animation 0.3s infinite';
    });
    glitchText.addEventListener('mouseleave', () => {
        glitchText.style.animation = 'glitch-animation 3s infinite';
    });
}

// Terminal activation
function activateTerminal() {
    const typingLine = document.querySelector('.typing-animation');
    if (typingLine) {
        typingLine.style.animation = 'none';
        setTimeout(() => {
            typingLine.style.animation = '';
        }, 10);
    }
    
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 100);
    
    addTerminalLog('> ACCESS_PROTOCOL initiated');
}

// ============================================
// EASTER EGG - CONSOLE
// ============================================

console.log('%cNEXUS SYSTEM INITIATED', 'color: #00ff41; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff41');
console.log('%cVersion 2.4.7 | Quantum Ready | Neural Interface Connected', 'color: #00d9ff; font-size: 12px');
console.log('%c\n⌨ TRY THESE KEYBOARD SHORTCUTS:\n Ctrl+M = Matrix Rain\n Ctrl+G = Glitch\n Ctrl+S = Scan\n Ctrl+N = Neon Flash\n Ctrl+R = Random Command\n Ctrl+Shift+C = Cyber Pulse\n ? = Help Menu\n', 'color: #b700ff; font-size: 11px; font-weight: bold');
console.log('%cWelcome, Hacker. The future awaits... 🔐', 'color: #ff006e; font-size: 12px; font-style: italic');
// ============================================
// CURSOR MANAGEMENT & PERSISTENCE
// ============================================

// Restore custom cursor when page regains focus
window.addEventListener('focus', () => {
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><defs><filter id=%22glow%22><feGaussianBlur stdDeviation=%221%22 result=%22coloredBlur%22/><feMerge><feMergeNode in=%22coloredBlur%22/><feMergeNode in=%22SourceGraphic%22/></feMerge></filter></defs><circle cx=%2216%22 cy=%2216%22 r=%223%22 fill=%22%2300d9ff%22 filter=%22url(%23glow)%22/><circle cx=%2216%22 cy=%2216%22 r=%228%22 stroke=%22%2300d9ff%22 stroke-width=%221.5%22 fill=%22none%22 filter=%22url(%23glow)%22/><circle cx=%2216%22 cy=%2216%22 r=%2212%22 stroke=%22%2300d9ff%22 stroke-width=%220.5%22 fill=%22none%22 opacity=%220.5%22/></svg>") 16 16, auto';
    console.log('%c[SYSTEM] Custom cursor restored on focus', 'color: #00ff41; font-weight: bold');
});

// Notify when page loses focus
window.addEventListener('blur', () => {
    console.log('%c[SYSTEM] Page lost focus - browser UI active', 'color: #ff006e; font-weight: bold');
});

// Re-apply cursor on mouse move (in case of accidental reset)
document.addEventListener('mousemove', (e) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    
    // Maintain custom cursor context
    if (element && element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><defs><filter id=%22glow%22><feGaussianBlur stdDeviation=%221%22 result=%22coloredBlur%22/><feMerge><feMergeNode in=%22coloredBlur%22/><feMergeNode in=%22SourceGraphic%22/></feMerge></filter></defs><rect x=%2210%22 y=%224%22 width=%2212%22 height=%2224%22 fill=%22none%22 stroke=%22%23ff006e%22 stroke-width=%221.5%22 filter=%22url(%23glow)%22/><line x1=%2210%22 y1=%2210%22 x2=%2222%22 y2=%2210%22 stroke=%22%23ff006e%22 stroke-width=%221%22 filter=%22url(%23glow)%22/></svg>") 16 16, auto';
    }
});

console.log('%c[CURSOR MANAGER] Active - Multiple color modes enabled', 'color: #00d9ff; font-weight: bold');
console.log('%c✓ Base: Neon Cyan | ✓ Links: Neon Green | ✓ Buttons: Neon Pink | ✓ Terminal: Green Pulse', 'color: #00ff41; font-size: 12px');
