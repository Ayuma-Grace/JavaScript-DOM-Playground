// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Text manipulation elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text');
    const addEmojiBtn = document.getElementById('add-emoji');
    const toggleCaseBtn = document.getElementById('toggle-case');

    // Style modification elements
    const styleTarget = document.getElementById('style-target');
    const changeColorBtn = document.getElementById('change-color');
    const changeSizeBtn = document.getElementById('change-size');
    const rotateTextBtn = document.getElementById('rotate-text');

    // Element manipulation elements
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element');
    const removeElementBtn = document.getElementById('remove-element');
    const toggleVisibilityBtn = document.getElementById('toggle-visibility');

    // Secret section elements
    const secretSection = document.getElementById('secret-section');
    const partyModeBtn = document.getElementById('party-mode');

    // Counter for secret section
    let clickCounter = 0;

    // Text manipulation functions
    changeTextBtn.addEventListener('click', function() {
        const messages = [
            "JavaScript is awesome!",
            "DOM manipulation is powerful!",
            "You can create amazing things!",
            "Web development is fun!",
            "Keep exploring JavaScript!"
        ];
        dynamicText.textContent = messages[Math.floor(Math.random() * messages.length)];
        incrementCounter();
    });

    addEmojiBtn.addEventListener('click', function() {
        const emojis = ['🚀', '🎯', '✨', '🔥', '💡', '👏'];
        dynamicText.textContent += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
        incrementCounter();
    });

    toggleCaseBtn.addEventListener('click', function() {
        if (dynamicText.textContent === dynamicText.textContent.toUpperCase()) {
            dynamicText.textContent = dynamicText.textContent.toLowerCase();
        } else {
            dynamicText.textContent = dynamicText.textContent.toUpperCase();
        }
        incrementCounter();
    });

    // Style modification functions
    changeColorBtn.addEventListener('click', function() {
        const colors = ['#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        styleTarget.style.color = randomColor;
        incrementCounter();
    });

    changeSizeBtn.addEventListener('click', function() {
        const currentSize = parseInt(window.getComputedStyle(styleTarget).fontSize) || 16;
        styleTarget.style.fontSize = (currentSize + 2) + 'px';
        incrementCounter();
    });

    rotateTextBtn.addEventListener('click', function() {
        const rotations = ['rotate(5deg)', 'rotate(-5deg)', 'rotate(10deg)', 'rotate(-10deg)', 'rotate(0)'];
        styleTarget.style.transform = rotations[Math.floor(Math.random() * rotations.length)];
        incrementCounter();
    });

    // Element manipulation functions
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        newElement.textContent = `New element added at ${new Date().toLocaleTimeString()}`;
        newElement.style.color = randomColor;
        newElement.style.padding = '8px';
        newElement.style.margin = '5px 0';
        newElement.style.borderLeft = `3px solid ${randomColor}`;
        
        elementContainer.appendChild(newElement);
        incrementCounter();
    });

    removeElementBtn.addEventListener('click', function() {
        if (elementContainer.children.length > 1) {
            elementContainer.removeChild(elementContainer.lastChild);
        } else {
            elementContainer.innerHTML = '<p>No more elements to remove!</p>';
        }
        incrementCounter();
    });

    toggleVisibilityBtn.addEventListener('click', function() {
        if (elementContainer.style.display === 'none') {
            elementContainer.style.display = 'block';
            toggleVisibilityBtn.textContent = 'Toggle Visibility';
        } else {
            elementContainer.style.display = 'none';
            toggleVisibilityBtn.textContent = 'Show Elements';
        }
        incrementCounter();
    });

    // Secret section functions
    function incrementCounter() {
        clickCounter++;
        if (clickCounter >= 5 && secretSection.classList.contains('hidden')) {
            secretSection.classList.remove('hidden');
            document.body.style.backgroundColor = '#f0f8ff';
        }
    }

    partyModeBtn.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33F3'];
        let i = 0;
        
        const partyInterval = setInterval(() => {
            document.body.style.backgroundColor = colors[i % colors.length];
            i++;
        }, 200);

        // Stop party mode after 10 seconds
        setTimeout(() => {
            clearInterval(partyInterval);
            document.body.style.backgroundColor = '#f5f5f5';
        }, 10000);
    });
});