document.addEventListener('DOMContentLoaded', function() {
    const loadingContainer = document.querySelector('.loading-container');
    const loadingTextElement = document.querySelector('.loading-text');
    const mainContent = document.getElementById('main-content');
    const fadeOutDuration = 2000;
    const pauseDuration = 500;
    
    setTimeout(function() {
        if (loadingTextElement) {
            const text = loadingTextElement.textContent;
            const letters = text.split('');
            let currentIndex = letters.length - 1;
            const fadeIntervalTime = fadeOutDuration / letters.length;

            const fadeInterval = setInterval(function() {
                if (currentIndex >= 0) {
                    letters[currentIndex] = '<span style="opacity: 0;">' + letters[currentIndex] + '</span>';
                    loadingTextElement.innerHTML = letters.join('');
                    currentIndex--;
                } else {
                    clearInterval(fadeInterval);
                    if (loadingContainer) {
                        loadingContainer.style.display = 'none';
                    }
                    // Add the pause before making the main content visible
                    setTimeout(function() {
                        if (mainContent) {
                            mainContent.classList.add('fade-in');
                        }
                        // Initialize particles.js after the pause
                        particlesJS('particles-js', {
                            particles: {
                                number: { value: 180, density: { enable: true, value_area: 800 } },
                                color: { value: '#ffffff' },
                                shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
                                opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                                size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                                line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                                move: { enable: true, speed: 0.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
                            },
                            interactivity: {
                                detect_on: 'canvas',
                                events: { onhover: { enable: false, mode: 'grab' }, onclick: { enable: false, mode: 'push' }, resize: true },
                                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                            },
                            retina_detect: true
                        });
                    }, pauseDuration);
                }
            }, fadeIntervalTime);
        } else {
            // Fallback if loading text element isn't found
            if (loadingContainer) {
                loadingContainer.style.display = 'none';
            }
            if (mainContent) {
                mainContent.classList.add('fade-in');
            }
            // Still initialize particles.js as a fallback
            particlesJS('particles-js', {
                particles: { number: { value: 30 }, color: { value: '#ffffff' }, shape: { type: 'circle' }, opacity: { value: 1 }, size: { value: 3 }, move: { enable: true, speed: 1 } },
                interactivity: { detect_on: 'canvas', events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
                retina_detect: true
            });
        }
    }, 50);
    
});